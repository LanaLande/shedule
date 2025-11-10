import { isCurrentDayByIndex } from "../../../../app/config/shedule/helpers/is-current-day-by-index";
import type { IDay } from "../../../../app/config/shedule/interfaces/days.interface";
import SHEDULE_CONFIG from "../../../../app/config/shedule/shedule.config";

export function getCurrentDayEvents(currentDate: Date) {
  
 let currentDayEvents: IDay['events'] | undefined;

 SHEDULE_CONFIG.forEach((day, i) => {
   if (isCurrentDayByIndex({ currDayIdx: i, currentDate })) {
     currentDayEvents = day.events;
   }
 });
  
  return currentDayEvents;
}