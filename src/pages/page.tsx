import { DayList } from "../components/day-list/day-list";
import { FeaturesBar } from "../components/featares-bar/features-bar";
import { LecturesModal } from "../components/modals/lectures-modal";
import Balatro from "../shared/bg";
import { useState } from "react";
import { useDisclosure } from "@heroui/react";
import type { IDay, ILecture } from "../config/days.config";
import DAYS_CONFIG from "../config/days.config";

export function Page() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  let [currentDayName, setCurrentDayName] = useState<string>(DAYS_CONFIG[0].name);
  let [currentLectures, setCurrentLectures] = useState<ILecture[]>(DAYS_CONFIG[0].lectures);

  function handleDayClick(day: IDay) {
    setCurrentDayName(day.name)
    setCurrentLectures(day.lectures)
    onOpen()
  }


  return (
    <>
      <div className="w-screen h-screen bg-[#212121] text-[#f2f2f2] flex overflow-hidden relative">
        <Balatro className="absolute" mouseInteraction={false} color1="#553a7e" color2="#4a2d62" color3="#162325"/>
        <div className="w-full h-full flex justify-center z-1" >
          <main className="h-screen w-full">
            <DayList onClick={handleDayClick}/>
          </main>
          <FeaturesBar className="h-full w-[100px]"/>
        </div>
      </div>
      <LecturesModal currentLectures={currentLectures} currentDayName={currentDayName} isOpen={isOpen} onClose={onClose} />
    </>
  )
}
