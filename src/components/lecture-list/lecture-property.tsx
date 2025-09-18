import Grid from "@mui/material/Grid";

export function LectureProperty ({property, size }:{property : string, size  : number}) {
    return (
       <Grid size={size} className="bg-[#000000] px-5 py-3 rounded-2xl flex items-center justify-center">{property}</Grid>
    )
  }