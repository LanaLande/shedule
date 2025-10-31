import { CURRENT_DAY } from '../consts/currentDay';

import { getCurrentDayEvents } from './getCurrentDayEvents';
import { getEventTiming } from './getEventTiming';
import { getTimeDifference } from './getTimeDifference';

export function getTimeToNextBreackPoint() {
  const currentDayEvents = getCurrentDayEvents();
  if (currentDayEvents === undefined) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  const firstEvent = getEventTiming(currentDayEvents[0]);

  //if before first Event
  if (CURRENT_DAY.hours <= firstEvent.StartHours && CURRENT_DAY.minutes < firstEvent.StartMinutes) {
    return getTimeDifference(firstEvent.StartHours, firstEvent.StartMinutes);
  }

  return { hours: 2, minutes: 7, seconds: 9 };
}
