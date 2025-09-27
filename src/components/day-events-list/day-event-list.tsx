import clsx from "clsx"
import { DayEventItem } from "./day-event-item"
import { useAtomValue } from "jotai"
import { currentDayEventsAtom, isCurrentDayAtom } from "../../app/store/jotai/atoms"
import { getDayEventItemProps } from "./helpers/get-day-event-item-props"


export function DayEventList( {className } :  { className? : string} ){
  const currentDayEvents = useAtomValue(currentDayEventsAtom)
  const isCurrentDay = useAtomValue(isCurrentDayAtom)

  return(
    <div  className={clsx("flex  flex-col gap-5 w-[90%] ",className )}>
      { currentDayEvents.map(event =>
      {
        const {isPast, isCurrentEvent} = getDayEventItemProps(event.timeDuration)

        return <DayEventItem isDisable={isPast || !isCurrentDay} isCurrentEvent={isCurrentEvent && isCurrentDay}  key={event.timeDuration} event={event}/>
       }
      )}
      
    </div>

  )
}