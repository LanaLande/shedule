import Grid from "@mui/material/Grid";
import { LectureProperty } from "./lecture-property";
import type { ILecture } from "../../config/days.config";
import { getLectureItemPropertyes } from "./helpers/get-lecture-item-properyes";

interface IProps {
  lecture : ILecture
  isPhone: boolean
}
export function LectureItem (props : IProps){

  const lectureItemPropertyes = getLectureItemPropertyes(props);

  return(
     <Grid container spacing={0.5}   className=" flex gap-10  ">
        {lectureItemPropertyes.map(props => 
          <LectureProperty {...props}/>
        )}
      </Grid>
  )
  
}