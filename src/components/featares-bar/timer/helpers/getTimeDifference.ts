import { differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

export function getTimeDifference(dateBefore: Date, dateAfter: Date) {

  return {
    hours: differenceInHours(dateAfter, dateBefore),
    minutes: differenceInMinutes(dateAfter, dateBefore) - differenceInHours(dateAfter, dateBefore) * 60,
    seconds: differenceInSeconds(dateAfter, dateBefore) - differenceInMinutes(dateAfter, dateBefore) * 60,
  };
}
