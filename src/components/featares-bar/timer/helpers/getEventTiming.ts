import type { IDayEvent } from '../../../../app/config/shedule/interfaces/days.interface';

export function getEventTiming(event: IDayEvent) {
  const eventStartHoursAndMinutesStr: string = event.timeDuration.split('-')[0];
  const eventEndHoursAndMinutesStr: string = event.timeDuration.split('-')[1];
  const eventStarHours: number = +eventStartHoursAndMinutesStr.split(':')[0];
  const eventStartMinutes: number = +eventStartHoursAndMinutesStr.split(':')[1];
  const eventEndHours: number = +eventEndHoursAndMinutesStr.split(':')[0];
  const eventEndMinutes: number = +eventEndHoursAndMinutesStr.split(':')[1];

  return {
    StartHours: eventStarHours,
    StartMinutes: eventStartMinutes,
    EndHours: eventEndHours,
    EndMinutes: eventEndMinutes,
  };
}
