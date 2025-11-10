import clsx from 'clsx';

interface IProps {
  hours: number;
  minutes: number;
  seconds: number;
}
export function formatTime({ hours, minutes, seconds }: IProps) {
  if (hours === 0 && minutes === 0 && seconds === 0) return 'кукуруза еее!';

  if (hours !== 0) return clsx(hours + 'ч', minutes + 'м');

  if (minutes === 0) return clsx(seconds + 'с');

  return clsx(minutes + 'м', seconds + 'с');
}
