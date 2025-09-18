import { DayList } from "../components/day-list/day-list";
import { FeaturesBar } from "../components/featares-bar/features-bar";
import Balatro from "../shared/bg";


export function Page() {
  return (
    <div className="w-screen h-screen bg-[#212121] text-[#f2f2f2] flex overflow-hidden relative">
      <Balatro className="absolute" mouseInteraction={false} color1="#553a7e" color2="#4a2d62" color3="#162325"/>
      <div className="w-full h-full flex justify-center z-1 ">
        <main className="h-screen w-full">
          <DayList />
        </main>
        <FeaturesBar className="h-full w-[100px]"/>
      </div>
    </div>
 
  )
}