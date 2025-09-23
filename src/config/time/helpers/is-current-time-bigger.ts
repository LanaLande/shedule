import { currentDate } from "../../day/day.config";

export function isCurrentTimeBigger (currentLectureTime : string ) : boolean {

  const lectureDate = new Date(`March 1, 1 ${currentLectureTime}`);

  const lectureHours = lectureDate.getHours();
  const currentHours = currentDate.getHours();

  const lectureMinutes = lectureDate.getMinutes();
  const currentMinutes = currentDate.getMinutes();

  if(currentHours - lectureHours == 0){
    return currentMinutes - lectureMinutes >= 0
  }
  else{
    return currentHours - lectureHours >= 0;
  }
}

