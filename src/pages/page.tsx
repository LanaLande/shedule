import { DayList } from "../components/day-list/day-list";
import { FeaturesBar } from "../components/featares-bar/features-bar";
import { DayEventsModal } from "../components/modals/day-events-modal";
import Bg from "../shared/bg";
import { useState } from "react";
import { useDisclosure } from "@heroui/react";
import DAYS_CONFIG from "../config/shedule/shedule.config";
import type { IDay, IDayEvent } from "../config/shedule/interfaces/days.interface";

export function Page() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const [clickedDayData, setClickedDayData] = useState<
  {
    currentDayName : string
    currentEvents : IDayEvent[]
    isCurrentDay : boolean
  }>
  (
    {
      currentDayName : DAYS_CONFIG[0].name,
      currentEvents : DAYS_CONFIG[0].events,
      isCurrentDay : false
    });


 function handleDayClick(day: IDay) {
    setClickedDayData({currentDayName : day.name,  isCurrentDay : day.isCurrent, currentEvents: day.events})
    // setClickedDayData(prev => ({...prev , currentDayName : day.name,}))
    onOpen()
  }

  return (
    <>
      <div className="w-screen h-screen text-[#f2f2f2] flex overflow-hidden relative">
        <Bg className="absolute" hueShift={323} speed={3}
          // color1="#553a7e" color2="#4a2d62" color3="#162325"
        />
        <div className="w-full h-full flex flex-col-reverse sm:flex-row justify-center z-1" >

          <main className="h-screen w-full p-5">
            <DayList onClick={handleDayClick}/>
          </main>
          <FeaturesBar className="h-[70px] sm:h-full w-full sm:w-[100px]"/>

        </div>
      </div>
      <DayEventsModal currentEvents={clickedDayData.currentEvents} currentDayName={clickedDayData.currentDayName} isOpen={isOpen} onClose={onClose} isCurrentDay={clickedDayData.isCurrentDay}/>
    </>
  )
}
