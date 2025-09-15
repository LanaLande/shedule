import Grid from "@mui/material/Grid";
import { DayItem } from "./day-item";
import DAYS_CONFIG from "../../config/days.config";



export function DayList (){
return(
    <div className=" flex pt-15 sm:pl-6 gap-7 w-full sm:w-2/3 flex-wrap">

      <Grid container spacing={2}>

       {DAYS_CONFIG.map(day =>
        <Grid key={day.name} size={4}>
          <DayItem dayName={day.name} dayDuration={day.duration} dayColor={day.color}/>
        </Grid>
       )}
      </Grid>
       

    </div>
  )
}

  
  