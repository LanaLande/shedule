import type { ILecture } from "../../../config/shedule/interfaces/shedule.interface";

export function getLectureItemPropertyes ({ lecture,isDisable}:{ lecture: ILecture,isDisable : boolean}){

    return  [
              {size: { xs: 6 , md: 3} , property : lecture.timeDuration , isDisable},
              {size: { xs: 6 , md: 3} , property : lecture.name, isDisable},
              {size: { xs: 8 , md: 3}, property : lecture.teacher, isDisable},
              {size: { xs: 4 , md: 3} , property : lecture.audition, isDisable}
            ]
}