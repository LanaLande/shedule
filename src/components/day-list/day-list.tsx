import { DayItem } from './day-item';
import clsx from 'clsx';
import DAYS_CONFIG from '../../app/config/shedule/shedule.config';
import { isCurrentDayByIndex } from '../../app/config/shedule/helpers/is-current-day-by-index';
import { useDayList } from './hooks/use-day-list';

export function DayList({ className }: { className?: string }) {
  const { handleDayClick } = useDayList();

  return (
    <div className={clsx('flex flex-col gap-4', className)}>
        {DAYS_CONFIG.map((day, i) => (
          <DayItem
            onClick={() => handleDayClick(day, i)}
            dayName={day.name}
            dayDuration={day.duration}
            isCurrent={isCurrentDayByIndex(i)}
            key={day.name}
          />
        ))}
      </div>
  );
}
