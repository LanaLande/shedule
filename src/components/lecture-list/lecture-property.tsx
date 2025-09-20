import Grid from "@mui/material/Grid";
import clsx from "clsx";

interface IProps {
   property : string
   size  : number
   isDisable: boolean

}

export function LectureProperty ({property, size, isDisable }: IProps) {
    return (
       <Grid size={size} className={clsx("bg-[#00000020] px-5 py-3 rounded-2xl flex items-center justify-center", isDisable && 'opacity-30')}>{property}</Grid>
    )
  }