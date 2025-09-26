import Grid from "@mui/material/Grid";
import { Plitka } from "./plitka";
import type { IDayEvent } from "../../config/shedule/interfaces/days.interface";
import { getPlitkasProps as getPlitkasProps } from "./helpers/get-plitkas-props";

interface IProps {
  event : IDayEvent
  isDisable : boolean
}
export function DayEventItem ({isDisable, event} : IProps){

  
  const plitkasProps = getPlitkasProps({event, isDisable});

  return(
     <Grid container spacing={0.5}   className="flex gap-10">
        {plitkasProps.map(PlitkaProps => 
          <Plitka key={PlitkaProps.property} {...PlitkaProps}/>
        )}
      </Grid>
  )
}
