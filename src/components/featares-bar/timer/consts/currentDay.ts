import { currentDate } from '../../../../app/config/day/day.config';

export const CURRENT_DAY = {
  hours: currentDate.getHours(),
  minutes: currentDate.getMinutes(),
};
