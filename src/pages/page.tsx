import { Content } from "../components/content/content";
import { FeaturesBar } from "../components/featares-bar/features-bar";
import Balatro from "../shared/bg";


export function Page() {
  return (
    // <div className="w-screen h-screen bg-[#212121] text-[#f2f2f2] flex overflow-x-hidden relative">
    //   <Balatro className="absolute" mouseInteraction={false} color1="#553a7e" color2="#4a2d62" color3="#162325"/>
    //   <div className="w-full h-full flex justify-center absolute ">
    //     <Content className="h-screen w-full"/>
    //     <FeaturesBar className="h-full w-[100px]"/>
    //   </div>
    // </div>
    <div className="w-screen h-screen bg-[#212121] text-[#f2f2f2] flex overflow-x-hidden ">
      <Balatro  mouseInteraction={false} color1="#553a7e" color2="#4a2d62" color3="#162325"/>
      <div className="w-full h-full flex justify-center ">
        <Content className="h-screen w-full"/>
        <FeaturesBar className="h-full w-[100px]"/>
      </div>
    </div>
  )
}