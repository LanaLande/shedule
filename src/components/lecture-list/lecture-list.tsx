import clsx from "clsx"
import { LectureItem } from "./lecture-item"
import { isCurrentTimeBigger } from "../../config/time/helpers/is-current-time-bigger"
import type { ILecture } from "../../config/shedule/interfaces/shedule.interface"

interface IProps {
  lectures : ILecture[]
  className? : string
  isCurrentDay?: boolean
}


export function LectureList ({lectures, isCurrentDay, className } : IProps){
  
  const isPhone = window.innerWidth < 740


  return(
    <div  className={clsx("flex  flex-col gap-5 w-[90%] ",className )}>
      { lectures.map (lecture =>
      {
        const isPast = isCurrentTimeBigger(lecture.timeDuration.split("-")[1]);

        return <LectureItem isDisable={isPast || !isCurrentDay}  key={lecture.timeDuration} lecture={lecture} isPhone={isPhone}/>
       }
      )}
      
    </div>

  )
}