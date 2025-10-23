import { COLORS_CONFIG, GRADIENT_COLORS_CONFIG } from '../../../app/config/colors/colors.config';
import type { IDayEvent } from '../../../app/config/shedule/interfaces/days.interface';

export function getPlitkasProps({
  event,
  isDisable,
  isCurrentEvent,
}: {
  event: IDayEvent;
  isDisable: boolean;
  isCurrentEvent: boolean;
}) {
  switch (event.type) {
    case 'lecture':
      return [
        {
          size: { xs: 6, md: 3 },
          value: event.timeDuration,
          isDisable,
          plitkaColor: isCurrentEvent ? GRADIENT_COLORS_CONFIG.currentPlitka : COLORS_CONFIG.defaultPlitka,
        },
        {
          size: { xs: 6, md: 3 },
          value: event.name,
          isDisable,
          plitkaColor: isCurrentEvent ? GRADIENT_COLORS_CONFIG.currentPlitka : COLORS_CONFIG.defaultPlitka,
        },
        {
          size: { xs: 8, md: 3 },
          value: event.teachers,
          isDisable,
          plitkaColor: isCurrentEvent ? GRADIENT_COLORS_CONFIG.currentPlitka : COLORS_CONFIG.defaultPlitka,
        },
        {
          size: { xs: 4, md: 3 },
          value: event.audition,
          isDisable,
          plitkaColor: isCurrentEvent ? GRADIENT_COLORS_CONFIG.currentPlitka : COLORS_CONFIG.defaultPlitka,
        },
      ];

    case 'lunch':
      return [
        {
          size: { xs: 6, md: 3 },
          value: event.timeDuration,
          isDisable,
          plitkaColor: isCurrentEvent ? GRADIENT_COLORS_CONFIG.currentPlitka : COLORS_CONFIG.defaultPlitka,
        },
        { size: { xs: 6, md: 9 }, value: event.name, isDisable, plitkaColor: COLORS_CONFIG.breakPlitka },
      ];
  }
}
