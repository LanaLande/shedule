import clsx from "clsx"
import { WeekNumber } from "../week/week-number"

export function FeaturesBar(){

return (
  <div className={clsx(" p-5 flex gap-5 h-screen w-1/10 items-end flex-col ")}>
    <WeekNumber/>
  </div>
)
}