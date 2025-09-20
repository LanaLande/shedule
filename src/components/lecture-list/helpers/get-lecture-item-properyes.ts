import type { ILecture } from "../../../config/days/days.config";

export function getLectureItemPropertyes ({isPhone, lecture}:{isPhone : boolean,  lecture: ILecture}){

    return  [
              {size: isPhone ? 6 : 3 , property : lecture.timeDuration},
              {size: isPhone ? 6 : 3 , property : lecture.name},
              {size: isPhone ? 8 : 3 , property : lecture.teacher},
              {size: isPhone ? 4 : 3 , property : lecture.audition}
            ]
}