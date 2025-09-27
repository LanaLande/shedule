import Grid from "@mui/material/Grid";
import { DayItem } from "./day-item";
import clsx from "clsx";
import DAYS_CONFIG from "../../config/shedule/shedule.config";
import { isCurrentDayByIndex } from "../../config/shedule/helpers/is-current-day-by-index";
import { useDayList } from "./hooks/use-day-list";


export function DayList ({className } : {className?:string}){
  const {handleDayClick} = useDayList()

  return(
    <div className={clsx("flex gap-7 w-full flex-wrap", className)}>

      <Grid container spacing={2}>
      {DAYS_CONFIG.map((day, i) =>
        <Grid key={day.name} size={{xs:6, sm:4}}>
          <DayItem onClick={() => handleDayClick(day,i)} 
            dayName={day.name}
            dayDuration={day.duration}
            isCurrent={isCurrentDayByIndex(i)}
          />
        </Grid>
      )}
      </Grid>
    </div>
    )
}

  
  