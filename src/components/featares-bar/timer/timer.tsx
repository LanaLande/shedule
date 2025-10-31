import { COLORS_CONFIG, GRADIENT_COLORS_CONFIG } from '../../../app/config/colors/colors.config';

import { GradientBorderDiv } from '../../../shared/gradient-border-div/gradient-border-div';
import { formatTime } from './helpers/formatTime';
import { getTimeToNextBreackPoint } from './helpers/getTimeToNextBreackPoint';

interface IProps {}
export function Timer({}: IProps) {

  const time = getTimeToNextBreackPoint();

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
