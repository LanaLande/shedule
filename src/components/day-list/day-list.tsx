import Grid from "@mui/material/Grid";
import { DayItem } from "./day-item";
import clsx from "clsx";
import type { IDay } from "../../config/shedule/interfaces/days.interface";
import DAYS_CONFIG from "../../config/shedule/shedule.config";



export function DayList ({className, onClick } : {className?:string, onClick : (day : IDay) => void}){

return(
    <div className={clsx("flex gap-7 w-full flex-wrap", className)}>

      <Grid container spacing={2}>
       {DAYS_CONFIG.map(day =>
        <Grid key={day.name} size={{xs:6, sm:4}}>
          <DayItem onClick={() => onClick(day)} 
            dayName={day.name}
            dayDuration={day.duration}
            dayColor={day.color}
          />
        </Grid>
       )}
      </Grid>
    </div>
  )
}

  
  