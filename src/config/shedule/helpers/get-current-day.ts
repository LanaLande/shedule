export function getCurrentDay(currentDate : Date) {
  const rawlCurrentDay = currentDate.getDay() 
  
  if(rawlCurrentDay == 0) return 6
  return rawlCurrentDay - 1
}