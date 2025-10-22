import type { IDay } from '../../../app/config/shedule/interfaces/days.interface';
import { useSetAtom } from 'jotai';
import {
  selectedDayEventsAtom,
  selectedDayNameAtom,
  isCurrentDayAtom,
  isDayEventsModalOpenAtom,
} from '../../../app/store/jotai/atoms';
import { isCurrentDayByIndex } from '../../../app/config/shedule/helpers/is-current-day-by-index';

export function useDayList() {
  const setSelectedDayName = useSetAtom(selectedDayNameAtom);
  const setIsDayEventsModalOpen = useSetAtom(isDayEventsModalOpenAtom);
  const setSelectedDayEvents = useSetAtom(selectedDayEventsAtom);
  const setIsCurrentDay = useSetAtom(isCurrentDayAtom);

  const handleDayClick = (day: IDay, i: number) => {
    setSelectedDayName(day.name);
    setIsDayEventsModalOpen(true);
    setSelectedDayEvents(day.events);
    setIsCurrentDay(isCurrentDayByIndex(i));
  };

  return { handleDayClick };
}
