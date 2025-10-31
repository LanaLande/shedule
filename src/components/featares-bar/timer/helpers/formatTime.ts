import clsx from "clsx";

interface IProps {
  hours : number;
  minutes : number;
  seconds : number;
} 
export function formatTime ({hours,minutes,seconds} : IProps){
  
  
  
  return(
    clsx(hours, 'h', minutes, 'm', seconds, 's')
  )
}