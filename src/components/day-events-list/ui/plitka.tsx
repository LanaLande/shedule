import clsx from 'clsx';
import type { ILecture } from '../../../app/config/shedule/interfaces/days.interface';
import { isMobile } from 'react-device-detect';
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/popover';
import { Tooltip } from '@heroui/tooltip';
import { shortName } from '../../../shared/helpers/short-name';
import { COLORS_CONFIG } from '../../../app/config/colors/colors.config';
import { RenderPlitka } from './render-plitka';



interface IProps {
  value: string | ILecture['teachers'];
  size?: { [key in 'xs' | 'sm' | 'md' | 'lg' | 'xl']?: number };
  isDisable: boolean;
  plitkaColor: string | string[];
}

export function Plitka(props: IProps) {

  const value = props.value;
  // if teachers names
  if (Array.isArray(value)) {
    if (isMobile) {
      return (
        <Popover
          showArrow
          offset={10}
          placement="top"
          classNames={{
            content: clsx(COLORS_CONFIG.popUpWindowBgClassName, COLORS_CONFIG.popUpWindowTextClassName),
            base: COLORS_CONFIG.popUpWindowArrowClassName,
          }}
        >
          <PopoverTrigger>
            <RenderPlitka {...props} handleTeacherNamesFunction={shortName} />
          </PopoverTrigger>
          <PopoverContent>
            {value.map((name) => (
              <p className="text-lg" key={name}>
                {name}
              </p>
            ))}
          </PopoverContent>
        </Popover>
      );
    } else {
      return (
        <Tooltip
          color="secondary"
          showArrow
          classNames={{
            content: clsx(COLORS_CONFIG.popUpWindowBgClassName, COLORS_CONFIG.popUpWindowTextClassName),
            base: COLORS_CONFIG.popUpWindowArrowClassName,
          }}
          content={
            <div className="p-2 text-lg">
              {value.map((name) => (
                <p key={name}>{name}</p>
              ))}
            </div>
          }
          placement="top"
        >
          <RenderPlitka {...props} handleTeacherNamesFunction={shortName} />
        </Tooltip>
      );
    }
  } else {
    // if other values
    return <RenderPlitka {...props} />;
  }
}
