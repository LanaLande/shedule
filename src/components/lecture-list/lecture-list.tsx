import type { ILecture } from "../../config/days.config"
import clsx from "clsx"
import { LectureItem } from "./lecture-item"

interface IProps {
  lectures : ILecture[]
  className? : string
}


export function LectureList ({lectures, className} : IProps){
  
  const isPhone = window.innerWidth < 740



  return(
    <div  className={clsx("flex  flex-col gap-5 w-[90%] ",className )}>
      { lectures.map (lecture =>
       <LectureItem key={lecture.timeDuration} lecture={lecture} isPhone={isPhone}/>
      )}
      
    </div>

  )
}