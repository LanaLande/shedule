import { DayList } from "../components/day-list/day-list";
import { FeaturesBar } from "../components/featares-bar/features-bar";
import { DayEventsModal } from "../components/modals/day-events-modal";
import Bg from "../shared/bg";

export function Page() {

  return (
    <>
      <div className="w-screen h-screen text-[#f2f2f2] flex overflow-hidden relative">
        <Bg className="absolute" hueShift={323} speed={3}/>
        <div  className="w-full h-full flex flex-col-reverse sm:flex-row justify-center z-1" >

          <main className="h-screen w-full p-5">
            <DayList />
          </main>
          
          <FeaturesBar className="h-[70px] sm:h-full w-full sm:w-[100px]"/>
        </div>
      </div>
      <DayEventsModal/>
    </>
  )
}
