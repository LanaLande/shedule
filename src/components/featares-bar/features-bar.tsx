import clsx from 'clsx';
import { WeekNumber } from './week/week-number';
import { Timer } from './timer/timer';

export function FeaturesBar({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'p-1 px-2 sm:px-0 sm:p-5  flex gap-5 items-center sm:items-center justify-between sm:justify-start backdrop-blur-xl',
        className,
      )}
    >
      <WeekNumber />
      <Timer/>
    </div>
  );
}
