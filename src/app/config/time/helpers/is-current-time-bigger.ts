import { currentDate } from "../../day/day.config";



export function isCurrentTimeBigger (currentEventTimeEnd : string ) : boolean {

  const eventDate = new Date(`March 1, 1 ${currentEventTimeEnd}`);

  const eventHours = eventDate.getHours();
  const currentHours = currentDate.getHours();

  const eventMinutes = eventDate.getMinutes();
  const currentMinutes = currentDate.getMinutes();

  if(currentHours - eventHours == 0){
    return currentMinutes - eventMinutes >= 0
  }
  else{
    return currentHours - eventHours >= 0;
  }
}

