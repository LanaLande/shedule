import { forwardRef } from 'react';
import Grid from '@mui/material/Grid';
import type { ILecture } from '../../../app/config/shedule/interfaces/days.interface';
import clsx from 'clsx';


interface IRenderGridProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | ILecture['teachers'];
  handleTeacherNamesFunction?: (value: string) => string;
  size?: { [key in 'xs' | 'sm' | 'md' | 'lg' | 'xl']?: number };
  isDisable: boolean;
  color: string;
}

export const RenderPlitka = forwardRef<HTMLDivElement, IRenderGridProps>(function GridWithoutForwardRef(
  { value, size, color, isDisable, handleTeacherNamesFunction, ...htmlDefaultProps },
  ref,
) {
  return (
    <Grid
      ref={ref}
      {...htmlDefaultProps}
      size={size}
      sx={{
        backgroundColor: color,
        flexDirection: 'column',
      }}
      className={clsx('px-1 py-3 rounded-2xl flex items-center justify-center', isDisable && 'opacity-40')}
    >
      {handleTeacherNamesFunction && Array.isArray(value) ? (
        value.map((value) => <p key={value}>{handleTeacherNamesFunction(value)}</p>)
      ) : (
        <p>{value}</p>
      )}
    </Grid>
  );
});
