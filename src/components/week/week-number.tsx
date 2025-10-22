import { COLORS_CONFIG, GRADIENT_COLORS_CONFIG } from '../../app/config/colors/colors.config';
import { isEvenWeek } from '../../app/config/time/time.config';
import { GradientBorderDiv } from '../../shared/gradient-border-div/gradient-border-div';

export function WeekNumber() {
  return (
    <GradientBorderDiv
      className="unselectable w-10 h-10 sm:w-13 sm:h-13 rounded-full flex justify-center items-center text-xl"
      style={{ background: COLORS_CONFIG.weekNumberBg }}
      colors={GRADIENT_COLORS_CONFIG.weekNumberBorder}
      borderWidth={3}
      borderRadius={'100%'}
    >
      <p>{isEvenWeek ? 2 : 1}</p>
    </GradientBorderDiv>
  );
}
