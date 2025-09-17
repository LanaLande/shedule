import { Content } from "../components/content/content";
import { FeaturesBar } from "../components/featares-bar/features-bar";
import Balatro from "../shared/bg";


export function Page() {
  return (
    <div className="w-screen h-screen bg-[#212121] text-[#f2f2f2] flex overflow-hidden relative">
      <Balatro className="absolute" mouseInteraction={false} color1="#553a7e" color2="#4a2d62" color3="#162325"/>
      <div className="w-full h-full flex justify-center z-1 ">
        <Content className="h-screen w-full"/>
        <FeaturesBar className="h-full w-[100px]"/>
      </div>
    </div>
 
  )
}