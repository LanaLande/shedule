import Grid from '@mui/material/Grid';
import { Plitka } from './plitka';
import type { IDayEvent } from '../../../app/config/shedule/interfaces/days.interface';
import { getPlitkasProps as getPlitkasProps } from '../helpers/get-plitkas-props';

interface IProps {
  isCurrentEvent: boolean;
  event: IDayEvent;
  isDisable: boolean;
}
export function DayEventItem(props: IProps) {
  const plitkasProps = getPlitkasProps(props);

  return (
    <Grid container spacing={0.5} className="flex gap-10">
      {plitkasProps.map((plitkaProps) => (
        <Plitka key={String(plitkaProps.value)} {...plitkaProps}/>
      ))}
    </Grid>
  );
}
