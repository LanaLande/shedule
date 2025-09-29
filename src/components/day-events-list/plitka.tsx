import Grid from "@mui/material/Grid";
import clsx from "clsx";
import type { ILecture } from "../../config/shedule/interfaces/days.interface";
import {isMobile} from 'react-device-detect';
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Tooltip } from "@heroui/tooltip";
import { shortName } from "../../shared/helpers/short-name";
import { COLORS_CONFIG } from "../../config/colors/colors.config";

interface IProps {
   property : string | ILecture['teachers']
   size ?: {[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl']?: number }
   isDisable: boolean
   color: string
}


export function Plitka ({property, size, isDisable, color }: IProps) {

   // if teachers names
   if(typeof property === 'object'){
      if(isMobile){
         return (
            <Popover showArrow offset={10} placement="top" classNames={{
               content: clsx(COLORS_CONFIG.popUpWindowBgClassName, COLORS_CONFIG.popUpWindowTextClassName),
               base: [
          COLORS_CONFIG.popUpWindowArrowClassName
        ],
            }}>
               <PopoverTrigger>
                  <Grid size={size}
                     sx={{
                        backgroundColor: color,
                        flexDirection: "column", 
                     }}
                     className={clsx(" px-1 py-3 rounded-2xl flex items-center justify-center", isDisable && 'opacity-40')}
                     >
                     { property.map(teacherName => <p>{shortName(teacherName)}</p>)}
                  </Grid>
               </PopoverTrigger>
               <PopoverContent >
                  {property.map(name => (
                     <p className="text-lg" key={name} >{name}</p>
                  ))}
               </PopoverContent>
            </Popover>
         )
      }
      else {
         return (
            <Tooltip color="secondary" showArrow 
            classNames={{
               content: clsx(COLORS_CONFIG.popUpWindowBgClassName, COLORS_CONFIG.popUpWindowTextClassName),
               base: [
          COLORS_CONFIG.popUpWindowArrowClassName
        ],
            }}
               content={
                  <div className="p-2 text-lg">
                     {property.map(name => (
                        <p key={name} >{name}</p>
                     ))}
                  </div>
               }
               placement="top"
            >
               <Grid  size={size}
               sx={{
                  backgroundColor: color,
                  flexDirection: "column", 

               }}
               className={clsx("px-1 py-3 rounded-2xl flex items-center justify-center", isDisable && 'opacity-40')}
               >
                 { property.map(teacherName => <p>{shortName(teacherName)}</p>)}
               </Grid>
            </Tooltip>
         )
      }
   }
   else{
   // if other properties
      return (
      <Grid  size={size}
         sx={{
            backgroundColor: color,
         }}
         className={clsx(" px-1 py-3 rounded-2xl flex items-center justify-center", isDisable && 'opacity-40')}
         >
            {property}
      </Grid>
      )
   }

  }
  