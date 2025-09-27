import { currentDate } from "../../day/day.config"

export function isCurrentDayByIndex(currDayIdx: number): boolean {
  const rawlCurrentDay = currentDate.getDay() 
  
  if(rawlCurrentDay == 0) return currDayIdx === 6
  return currDayIdx === rawlCurrentDay - 1
}

