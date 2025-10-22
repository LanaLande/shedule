import { COLORS_CONFIG } from '../app/config/colors/colors.config';
import { DayList } from '../components/day-list/day-list';
import { FeaturesBar } from '../components/featares-bar/features-bar';
import { Footer } from '../components/footer/footer';
import { DayEventsModal } from '../components/modals/day-events-modal';
import { SosComponent } from '../components/sos/sos-component';
import Bg from '../shared/bg/bg';

export function MainPage() {
  return (
    <>
      <div
        className="w-screen h-screen text-[#f2f2f2] flex overflow-hidden relative"
        style={{ color: COLORS_CONFIG.text, background: COLORS_CONFIG.mainPageBg }}
      >
        <Bg className="absolute bottom-0 left-0" colors={COLORS_CONFIG.bgArrayColors} speeds={[75, 150, 300]} />
        <div className="w-full h-full flex flex-col-reverse sm:flex-row justify-center z-1">
          <div className="h-screen w-full p-3 flex flex-col">
            <main className="flex-auto flex flex-col gap-5">
              <SosComponent className="w-full" />
              <DayList />
            </main>
            <Footer className="mt-auto" />
          </div>

          <FeaturesBar className="h-[70px] sm:h-full w-full sm:w-[100px]" />
        </div>
      </div>
      <DayEventsModal />
    </>
  );
}
