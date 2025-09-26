import { currentDate } from "../../../config/day/day.config";


export function isCurrentTimeEqualEventTime({eventStartTime, eventEndTime} : {eventStartTime : string, eventEndTime: string} ) : boolean{
  
   
  const eventDateStart = new Date(`March 1, 2025 ${eventStartTime}`);
  const eventDateEnd = new Date(`March 1, 2025 ${eventEndTime}`);

  const eventHoursStart = eventDateStart.getHours();
  const eventHoursEnd = eventDateEnd.getHours();
  const currentHours = currentDate.getHours();

  const eventMinutesStart = eventDateStart.getMinutes();
  const eventMinutesEnd = eventDateEnd.getMinutes();
  const currentMinutes = currentDate.getMinutes();

if(currentHours > eventHoursStart && currentHours < eventHoursEnd) {
 return true
}
else if(currentHours === eventHoursStart && currentMinutes >= eventMinutesStart) {
  return true
}

else if(currentHours === eventHoursEnd && currentMinutes < eventMinutesEnd) {
  return true
}

return false


}
