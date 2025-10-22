import type { HTMLAttributes } from 'react';
import { COLORS_CONFIG, GRADIENT_COLORS_CONFIG } from '../../app/config/colors/colors.config';

interface IProps {
  dayName: string;
  isCurrent: boolean;
  dayDuration?: string;
}

export function DayItem({ dayName, isCurrent, dayDuration, onClick }: HTMLAttributes<HTMLDivElement> & IProps) {
  if (!dayDuration) return <></>;

  return (
    <div
      onClick={onClick}
      className="w-full p-3 rounded-2xl flex justify-between border-[2px] hover:scale-102 transition-all cursor-pointer"
      style={
        isCurrent
          ? {
              background: `linear-gradient(to right, ${GRADIENT_COLORS_CONFIG.dayActiveBg.toString()})`,
              borderWidth : 0,              
            }
          : {
              background: COLORS_CONFIG.dayPassiveBg,
              borderColor: COLORS_CONFIG.dayPassiveBorderColor,
            }
      }
    >
      <p>{dayName}</p>
      <div className="flex gap-3">
        <p>{dayDuration.split('-')[0]}</p>
        <p>{dayDuration.split('-')[1]}</p>
      </div>
    </div>
  );
}

//  backgroundColor: isCurrent ? COLORS_CONFIG.dayActiveHeader : COLORS_CONFIG.dayPassiveHeader,
