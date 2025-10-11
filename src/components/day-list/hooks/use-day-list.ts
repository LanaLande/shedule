import type { IDay } from '../../../app/config/shedule/interfaces/days.interface';
import { useSetAtom } from 'jotai';
import {
  currentDayEventsAtom,
  currentDayNameAtom,
  isCurrentDayAtom,
  isDayEventsModalOpenAtom,
} from '../../../app/store/jotai/atoms';
import { isCurrentDayByIndex } from '../../../app/config/shedule/helpers/is-current-day-by-index';

export function useDayList() {
  const setCurrentDayName = useSetAtom(currentDayNameAtom);
  const setIsDayEventsModalOpen = useSetAtom(isDayEventsModalOpenAtom);
  const setCurrentDayEvents = useSetAtom(currentDayEventsAtom);
  const setIsCurrentDay = useSetAtom(isCurrentDayAtom);

  const handleDayClick = (day: IDay, i: number) => {
    setCurrentDayName(day.name);
    setIsDayEventsModalOpen(true);
    setCurrentDayEvents(day.events);
    setIsCurrentDay(isCurrentDayByIndex(i));
  };

  return { handleDayClick };
}
