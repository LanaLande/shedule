import Grid from "@mui/material/Grid"
import type { ILecture } from "../../config/days.config"
import clsx from "clsx"

interface IProps {
  lectures : ILecture[]
  className? : string
}
export function LectureList ({lectures, className} : IProps){
  

  const isPhone = window.innerWidth < 740

  return(
    <div  className={clsx("flex  flex-col gap-5 w-[90%] ",className )}>
      { lectures.map (lecture => 
      <Grid  container spacing={0.5} key ={lecture.timeDuration}  className=" flex gap-10  ">
        <Grid size={isPhone ? 6 : 3} className="bg-[#000000] px-5 py-3 rounded-2xl flex items-center justify-center">{lecture.timeDuration}</Grid>
        <Grid size={isPhone ? 6 : 3} className="bg-[#000000] px-5 py-3 rounded-2xl flex items-center justify-center">{lecture.name}</Grid>
        <Grid size={isPhone ? 8 : 3} className="bg-[#000000] px-5 py-3 rounded-2xl flex items-center justify-center">{lecture.teacher}</Grid>
        <Grid size={isPhone ? 4 : 3} className="bg-[#000000] px-5 py-3 rounded-2xl flex items-center justify-center">{lecture.audition}</Grid>
      </Grid>
      )}
      
    </div>

    // <div className="flex gap-10 ">
    //   { lectures.map (lecture => 
    //   <div key ={lecture.timeDuration} className=" flex gap-5  ">
    //     <div className="bg-[#000000] px-5 py-3 rounded-2xl">{lecture.timeDuration}</div>
    //   </div>
    //   )} 
    //   { lectures.map (lecture => 
    //   <div key ={lecture.timeDuration} className=" flex gap-5  ">
    //     <div className="bg-[#000000] px-5 py-3 rounded-2xl">{lecture.name}</div>
    //   </div>
    //   )} 
    //   { lectures.map (lecture => 
    //   <div key ={lecture.timeDuration} className=" flex gap-5  ">
    //     <div className="bg-[#000000] px-5 py-3 rounded-2xl">{lecture.teacher}</div>
    //   </div>
    //   )}
    //    { lectures.map (lecture => 
    //   <div key ={lecture.timeDuration} className=" flex gap-5">
    //     <div className="bg-[#000000] px-5 py-3 rounded-2xl">{lecture.audition}</div>
    //   </div>
    //   )}
    // </div>

  )
}