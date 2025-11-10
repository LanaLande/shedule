import { isCurrentTimeBigger } from '../../../app/config/static-time/helpers/is-current-time-bigger';

function isCurrentTimeEqualEventTime({
  eventStartTime,
  eventEndTime,
  currentDate,
}: {
  eventStartTime: string;
  eventEndTime: string;
  currentDate: Date;
}): boolean {
  const eventDateStart = new Date(`March 1, 2025 ${eventStartTime}`);
  const eventDateEnd = new Date(`March 1, 2025 ${eventEndTime}`);

  const eventHoursStart = eventDateStart.getHours();
  const eventHoursEnd = eventDateEnd.getHours();
  const currentHours = currentDate.getHours();

  const eventMinutesStart = eventDateStart.getMinutes();
  const eventMinutesEnd = eventDateEnd.getMinutes();
  const currentMinutes = currentDate.getMinutes();

  if (currentHours > eventHoursStart && currentHours < eventHoursEnd) {
    return true;
  } else if (currentHours === eventHoursStart && currentMinutes >= eventMinutesStart) {
    return true;
  } else if (currentHours === eventHoursEnd && currentMinutes < eventMinutesEnd) {
    return true;
  }

  return false;
}

export function getDayEventItemProps({ currentDate, timeDuration }: { timeDuration: string; currentDate: Date }) {
  const [eventStartTime, eventEndTime] = timeDuration.split('-');
  const isPast = isCurrentTimeBigger({ currentEventTimeEnd: eventEndTime, currentDate });
  const isCurrentEvent = isCurrentTimeEqualEventTime({ eventStartTime, eventEndTime, currentDate });

  return { isPast, isCurrentEvent };
}
