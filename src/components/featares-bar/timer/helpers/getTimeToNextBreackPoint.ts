
import { getCurrentDayEvents } from './getCurrentDayEvents';
import { getTimeDifference } from './getTimeDifference';
import { EventTiming, LectureTiming } from './timing.classes';

export function getTimeToNextBreackPoint(currentDate:Date) {
  const CURRENT_DAY = {
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
  };

  const currentDayEvents = getCurrentDayEvents(currentDate);
  if (currentDayEvents === undefined) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  const firstEvent = new EventTiming(currentDayEvents[0], currentDate);
  const lastEvent = new EventTiming(currentDayEvents[currentDayEvents.length - 1], currentDate);

  // we are before school day
  if (
    CURRENT_DAY.hours < firstEvent.startHours ||
    (CURRENT_DAY.hours === firstEvent.startHours && CURRENT_DAY.minutes < firstEvent.startMinutes)
  ) {
    return getTimeDifference(currentDate, firstEvent.startCalcDate);
  }
  // we are after school day
  else if (
    CURRENT_DAY.hours > lastEvent.endHours ||
    (CURRENT_DAY.hours === lastEvent.endHours && CURRENT_DAY.minutes >= lastEvent.endMinutes)
  ) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }
  // we are in school day
  else {
    const points: Date[] = [];
    currentDayEvents.forEach((event) => {
      switch (event.type) {
        case 'lecture':
          const lecture = new LectureTiming(event, currentDate);
          points.push(lecture.startCalcDate, lecture.breakStartCalcDate, lecture.breakEndCalcDate, lecture.endCalcDate);

          break;
        case 'lunch':
          const lunch = new EventTiming(event, currentDate);
          points.push(lunch.startCalcDate, lunch.endCalcDate);
          break;
      }
    });

    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      if (currentDate < point) return getTimeDifference(currentDate, point);
    }
  }

  return { hours: 7, minutes: 7, seconds: 7 };
}
