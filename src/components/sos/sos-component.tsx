import clsx from 'clsx';
import { COLORS_CONFIG, GRADIENT_COLORS_CONFIG } from '../../app/config/colors/colors.config';
import { GradientBorderDiv } from '../../shared/gradient-border-div/gradient-border-div';

export function SosComponent({ className }: { className?: string }) {
  // надо будет потом получить
  const imgSrc = '/physics.png';
  const teacherName = 'Мороз Лариса Михайловна';
  const currentEvent = 'Физика';
  const nextEvent = 'СиС';
  const audition = '213';

  return (
    <GradientBorderDiv
      className={clsx('rounded-2xl px-2 py-2', className)}
      borderRadius="1rem"
      borderWidth={5}
      colors={GRADIENT_COLORS_CONFIG.sosComponentBorder}
      style={{ background: COLORS_CONFIG.sosComponentBg }}
      withAnimation
    >
      <div className=" flex gap-3 justify-center items-center">
        <img className="w-[55px] h-[55px]" src={imgSrc} alt="Иконка предмета" />
        <div className="text-large w-full">
          <div className="w-full flex justify-between">
            <div className="flex gap-1 justify-center items-center">
              <p>{currentEvent}</p>
              <img className=" w-[20px] h-[20px]" src="/icons/arrow-right.svg" alt="->" />
              <p className="opacity-40">{nextEvent}</p>
            </div>
            <p>{audition}</p>
          </div>
          <p>{teacherName}</p>
        </div>
      </div>
    </GradientBorderDiv>
  );
}
