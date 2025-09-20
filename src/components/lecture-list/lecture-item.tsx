import Grid from "@mui/material/Grid";
import { LectureProperty } from "./lecture-property";
import type { ILecture } from "../../config/days/days.config";
import { getLectureItemPropertyes } from "./helpers/get-lecture-item-properyes";

interface IProps {
  lecture : ILecture
  isPhone: boolean
  isDisable : boolean
}
export function LectureItem ({isDisable, isPhone, lecture} : IProps){

  
  const lectureItemPropertyes = getLectureItemPropertyes({isPhone,lecture});

  return(
     <Grid container spacing={0.5}   className=" flex gap-10  ">
        {lectureItemPropertyes.map(LecturePropertyProps => 
          <LectureProperty {...LecturePropertyProps} isDisable={isDisable}/>
        )}
      </Grid>
  )
  
}