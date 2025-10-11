import clsx from 'clsx';
import { WeekNumber } from '../week/week-number';

export function FeaturesBar({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'p-1 px-2 sm:px-0 sm:p-5  flex gap-5 items-start sm:items-center justify-center sm:justify-start flex-col backdrop-blur-xl',
        className,
      )}
    >
      <WeekNumber />
    </div>
  );
}
