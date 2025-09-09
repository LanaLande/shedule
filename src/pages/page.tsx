import { Content } from "../components/content/content";
import { FeaturesBar } from "../components/sidebar/side-bar";


export function Page() {
  return (
    <div className="w-screen h-screen bg-[#212121] text-[#f2f2f2] flex justify-center overflow-x-hidden">
      <Content/>
      <FeaturesBar/>
    </div>
  )
}