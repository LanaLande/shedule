import Grid from "@mui/material/Grid";
import { LectureProperty } from "./lecture-property";
import { getLectureItemPropertyes } from "./helpers/get-lecture-item-properyes";
import type { ILecture } from "../../config/shedule/interfaces/shedule.interface";

interface IProps {
  lecture : ILecture
  isDisable : boolean
}
export function LectureItem ({isDisable, lecture} : IProps){

  
  const lectureItemPropertyes = getLectureItemPropertyes({lecture,isDisable});

  return(
     <Grid container spacing={0.5}   className="flex gap-10">
        {lectureItemPropertyes.map(LecturePropertyProps => 
          <LectureProperty key={LecturePropertyProps.property} {...LecturePropertyProps}/>
        )}
      </Grid>
  )
}
