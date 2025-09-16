import clsx from "clsx"
import { WeekNumber } from "../week/week-number"

export function FeaturesBar({className} : {className?: string}){

return (
  <div className={clsx(" p-5 flex gap-5 items-center flex-col backdrop-blur-xl", className)}>
    <WeekNumber/>
  </div>
)
}