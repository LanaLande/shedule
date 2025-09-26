import Grid from "@mui/material/Grid";
import clsx from "clsx";

interface IProps {
   property : string
   size ?: {[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl']?: number }
   isDisable: boolean
   color: string
}

export function Plitka ({property, size, isDisable, color }: IProps) {
    return (
       <Grid size={size}
       sx={{
         backgroundColor: color,
       }}
       className={clsx(" px-5 py-3 rounded-2xl flex items-center justify-center", isDisable && 'opacity-30')}>{property}</Grid>
    )
  }
  