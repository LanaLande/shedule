import { currentDate } from '../../../../app/config/day/day.config';
import { differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

const getCalcDate = (hours: number, minutes: number, seconds: number = 0) => {
  return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes, seconds);
};

export function getTimeDifference(hours: number, minutes: number, seconds: number = 0) {
  const firstEventDate = getCalcDate(hours, minutes, seconds);

  return {
    hours: differenceInHours(firstEventDate, currentDate),
    minutes: differenceInMinutes(firstEventDate, currentDate) - differenceInHours(firstEventDate, currentDate) * 60,
    seconds: differenceInSeconds(firstEventDate, currentDate) - differenceInMinutes(firstEventDate, currentDate) * 60,
  };
}
