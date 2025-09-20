import Grid from "@mui/material/Grid";
import { DayItem } from "./day-item";
import DAYS_CONFIG, { type IDay } from "../../config/days/days.config";
import clsx from "clsx";



export function DayList ({className, onClick } : {className?:string, onClick : (day : IDay) => void}){

return(
    <div className={clsx(" flex pt-15 sm:pl-6 gap-7 w-full sm:w-2/3 flex-wrap", className)}>

      <Grid container spacing={2}>
       {DAYS_CONFIG.map(day =>
        <Grid key={day.name} size={4}>
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

  
  