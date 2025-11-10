import { COLORS_CONFIG, GRADIENT_COLORS_CONFIG } from '../../../app/config/colors/colors.config';

import { GradientBorderDiv } from '../../../shared/gradient-border-div/gradient-border-div';
import { formatTime } from './helpers/formatTime';
import { getTimeToNextBreackPoint } from './helpers/getTimeToNextBreackPoint';
import { useAtomValue } from 'jotai';
import { currentDateAtom } from '../../../app/store/jotai/atoms';

export function Timer() {
  const currentDate = useAtomValue(currentDateAtom);
  const time = getTimeToNextBreackPoint(currentDate);

  return (
    <GradientBorderDiv
      style={{ background: COLORS_CONFIG.timerBg }}
      className="rounded-3xl px-3 py-2"
      borderRadius={24}
      borderWidth={3}
      colors={GRADIENT_COLORS_CONFIG.timerBorder}
    >
      <p>{formatTime(time)}</p>
    </GradientBorderDiv>
  );
}
