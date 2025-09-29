import type { HTMLAttributes } from "react"
import { COLORS_CONFIG } from "../../config/colors/colors.config"

interface IProps {
  dayName : string,
  isCurrent : boolean,
  dayDuration? : string,
}

export function DayItem({dayName,isCurrent,dayDuration, onClick} : HTMLAttributes<HTMLDivElement> &  IProps){
  if(!dayDuration) return <></>
  

  const [start, end] =  dayDuration.split('-')

  return(
    <div onClick={ onClick}  className="hover:scale-105 transition-transform cursor-pointer unselectable">
        <div className="py-2 px-3 text-lg rounded-t-xl" style={{backgroundColor:  isCurrent ? COLORS_CONFIG.dayActiveHeader  : COLORS_CONFIG.dayPassiveHeader}}>
            {dayName}
        </div>

        <div className="py-2 px-3 bg-[#a95fad]  text-lg rounded-b-xl flex items-center justify-between">
        <p>{start}</p>
        <p> {end} </p>
        </div>
    </div>
  )
}