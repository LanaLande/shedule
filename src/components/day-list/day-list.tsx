import Grid from "@mui/material/Grid";
import { DayItem } from "./day-item";
import DAYS_CONFIG, { type ILecture } from "../../config/days.config";
import clsx from "clsx";
import { useState } from "react";
import { useDisclosure } from "@heroui/react";
import { LecturesModal } from "../modals/lectures-modal";



export function DayList ({className } : {className?:string}){

  const {isOpen, onOpen, onClose} = useDisclosure();



let [currentDayName, setCurrentDayName] = useState<string>(DAYS_CONFIG[0].name);
let [currentLectures, setCurrentLectures] = useState<ILecture[]>(DAYS_CONFIG[0].lectures);


return(
    <div className={clsx(" flex pt-15 sm:pl-6 gap-7 w-full sm:w-2/3 flex-wrap", className)}>

      <Grid container spacing={2}>
       {DAYS_CONFIG.map(day =>
        <Grid key={day.name} size={4}>
          <DayItem onClick={() =>{ 
              setCurrentDayName(day.name)
              setCurrentLectures(day.lectures)
              onOpen()
          }
          } 
          dayName={day.name}
          dayDuration={day.duration}
          dayColor={day.color}
            />
        </Grid>
       )}
      </Grid>



{/*  */}

          <LecturesModal currentLectures={currentLectures} currentDayName={currentDayName} isOpen={isOpen} onClose={onClose} />



{/*  */}


    </div>
  )
}

  
  