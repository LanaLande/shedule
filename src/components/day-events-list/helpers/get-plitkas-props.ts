import { COLORS_CONFIG } from "../../../config/colors/colors.config";
import type { IDayEvent} from "../../../config/shedule/interfaces/days.interface";

export function getPlitkasProps ({ event, isDisable}:{ event: IDayEvent, isDisable : boolean}){

  switch (event.type){
    case 'lecture':
      return  [
              {size: { xs: 6 , md: 3} , property : event.timeDuration , isDisable, color : COLORS_CONFIG.defaultPlitka},
              {size: { xs: 6 , md: 3} , property : event.name, isDisable, color : COLORS_CONFIG.defaultPlitka},
              {size: { xs: 8 , md: 3}, property : event.teacher, isDisable, color : COLORS_CONFIG.defaultPlitka},
              {size: { xs: 4 , md: 3} , property : event.audition, isDisable, color : COLORS_CONFIG.defaultPlitka}
            ]

    case 'lunch':
      return [
          {size: { xs: 6 , md: 3} , property : event.timeDuration , isDisable, color : COLORS_CONFIG.defaultPlitka},
          {size: { xs: 6 , md: 9} , property : event.name, isDisable, color : COLORS_CONFIG.breakPlitka},
      ]
    
  }

  
}