import clsx from "clsx"
import { DayEventItem } from "./day-event-item"
import { isCurrentTimeBigger } from "../../config/time/helpers/is-current-time-bigger"
import type { IDayEvent } from "../../config/shedule/interfaces/days.interface"
import { isCurrentTimeEqualEventTime } from "./helpers/is-current-time-equal-event-time"

interface IProps {
  events : IDayEvent[]
  className? : string
  isCurrentDay: boolean
}


export function DayEventList({events, isCurrentDay, className } : IProps){


  return(
    <div  className={clsx("flex  flex-col gap-5 w-[90%] ",className )}>
      { events.map(event =>
      {

        const [eventStartTime, eventEndTime] = event.timeDuration.split("-")
        const isPast = isCurrentTimeBigger(eventEndTime);
        const isCurrentEvent = isCurrentTimeEqualEventTime({eventStartTime, eventEndTime})


        return <DayEventItem isDisable={isPast || !isCurrentDay} isCurrentEvent={isCurrentEvent && isCurrentDay}  key={event.timeDuration} event={event}/>
       }
      )}
      
    </div>

  )
}