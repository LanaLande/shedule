import clsx from 'clsx';
import { DayEventItem } from './ui/day-event-item';
import { useAtomValue } from 'jotai';
import { selectedDayEventsAtom, isCurrentDayAtom, currentDateAtom } from '../../app/store/jotai/atoms';
import { getDayEventItemProps } from './helpers/get-day-event-item-props';

export function DayEventList({ className }: { className?: string }) {
  const selectedDayEvents = useAtomValue(selectedDayEventsAtom);
  const isCurrentDay = useAtomValue(isCurrentDayAtom);
  const currentDate = useAtomValue(currentDateAtom);


  return (
    <div className={clsx('flex  flex-col gap-5  ', className)}>
      {selectedDayEvents.map((event) => {
        const { isPast, isCurrentEvent } = getDayEventItemProps({timeDuration: event.timeDuration, currentDate});

        return (
          <DayEventItem
            isDisable={!isCurrentDay || isPast}
            isCurrentEvent={isCurrentDay && isCurrentEvent}
            event={event}
            key={event.timeDuration}
          />
        );
      })}
    </div>
  );
}
