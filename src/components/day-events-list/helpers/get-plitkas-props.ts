import { COLORS_CONFIG } from '../../../app/config/colors/colors.config';
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
          color: isCurrentEvent ? COLORS_CONFIG.currentPlitka : COLORS_CONFIG.defaultPlitka,
        },
        {
          size: { xs: 6, md: 3 },
          value: event.name,
          isDisable,
          color: isCurrentEvent ? COLORS_CONFIG.currentPlitka : COLORS_CONFIG.defaultPlitka,
        },
        {
          size: { xs: 8, md: 3 },
          value: event.teachers,
          isDisable,
          color: isCurrentEvent ? COLORS_CONFIG.currentPlitka : COLORS_CONFIG.defaultPlitka,
        },
        {
          size: { xs: 4, md: 3 },
          value: event.audition,
          isDisable,
          color: isCurrentEvent ? COLORS_CONFIG.currentPlitka : COLORS_CONFIG.defaultPlitka,
        },
      ];

    case 'lunch':
      return [
        {
          size: { xs: 6, md: 3 },
          value: event.timeDuration,
          isDisable,
          color: isCurrentEvent ? COLORS_CONFIG.currentPlitka : COLORS_CONFIG.defaultPlitka,
        },
        { size: { xs: 6, md: 9 }, value: event.name, isDisable, color: COLORS_CONFIG.breakPlitka },
      ];
  }
}
