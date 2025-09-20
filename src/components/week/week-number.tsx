import { isEvenWeek } from "../../config/time/time.config";

export function WeekNumber(){
  
  const WEEK_NUMBER = isEvenWeek ? 2 : 1;
  return(
    <div className="unselectable w-16 h-16 rounded-full flex justify-center items-center text-2xl bg-[#b761c1]">{WEEK_NUMBER}</div>
  )
}