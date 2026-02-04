import { isStaticEvenWeek } from '../static-time/static-time.config';
import type { IDay, IDayEvent } from './interfaces/days.interface';

const SHEDULE_CONFIG: IDay[] = [
  {
    name: 'Понедельник',
    events: [
      {
        name: 'Охрана среды',
        timeDuration: '14:10-15:50',
        teachers: ['Богдашич Елена Ефимовна'],
        audition: '319',
        type: 'lecture',
      },
      {
        timeDuration: '15:50-16:20',
        type: 'lunch',
        name: 'Обед',
      },
      isStaticEvenWeek
        ? {
            name: 'Англ яз',
            timeDuration: '16:20-18:00',
            teachers: ['Прохорчук Анна Владимировна'],
            audition: '215',
            type: 'lecture',
          }
        : {
            name: 'Пд и УП',
            timeDuration: '16:20-18:00',
            teachers: ['Антонова Анна Владимировна'],
            audition: '302',
            type: 'lecture',
          },
      {
        name: 'Пд и УП',
        timeDuration: '18:15-19:55',
        teachers: ['Антонова Анна Владимировна'],
        audition: '302',
        type: 'lecture',
      },
    ],
  },

  {
    name: 'Вторник',
    events: [
      {
        name: 'Коммуникации',
        timeDuration: '14:10-15:50',
        teachers: ['Григорьева Анна Олеговна'],
        audition: '302',
        type: 'lecture',
      },
      {
        timeDuration: '15:50-16:20',
        type: 'lunch',
        name: 'Обед',
      },
      {
        name: 'Пд и УП',
        timeDuration: '16:20-18:00',
        teachers: ['Антонова Анна Владимировна'],
        audition: '307',
        type: 'lecture',
      },

      isStaticEvenWeek
        ? {
            name: 'Физра',
            timeDuration: '18:15-19:55',
            teachers: ['Кривицкий Сергей Валентинович', 'Праволоцкий Алексей Николаевич'],
            audition: 'Спортзал',
            type: 'lecture',
          }
        : {
            name: 'ИР ВР',
            timeDuration: '18:15-19:55',
            teachers: ['Марков Владислав Игоревич', 'Антипенко Татьяна Игоревна'],
            audition: '323',
            type: 'lecture',
          },
    ],
  },

  {
    name: 'Среда',
    events: [
      {
        name: 'Англ яз',
        timeDuration: '12:15-13:55',
        teachers: ['Прохорчук Анна Владимировна'],
        audition: '118',
        type: 'lecture',
      },
      {
        name: 'ИР ВР',
        timeDuration: '14:10-15:50',
        teachers: ['Марков Владислав Игоревич', 'Антипенко Татьяна Игоревна'],
        audition: '323',
        type: 'lecture',
      },
      {
        timeDuration: '15:50-16:20',
        type: 'lunch',
        name: 'Обед',
      },
      {
        name: 'Сети',
        timeDuration: '16:20-18:00',
        teachers: ['Марков Владислав Игоревич'],
        audition: '323',
        type: 'lecture',
      },
    ],
  },

  {
    name: 'Четверг',
    events: [
      {
        name: 'Англ яз',
        timeDuration: '12:15-13:55',
        teachers: ['Прохорчук Анна Владимировна'],
        audition: '118',
        type: 'lecture',
      },
      {
        name: 'Физра',
        timeDuration: '14:10-15:50',
        teachers: ['Кривицкий Сергей Валентинович', 'Праволоцкий Алексей Николаевич'],
        audition: 'Спортзал',
        type: 'lecture',
      },
      {
        timeDuration: '15:50-16:20',
        type: 'lunch',
        name: 'Обед',
      },
      {
        name: 'Безопасность',
        timeDuration: '16:20-18:00',
        teachers: ['Бондаренко Павел Игоревич'],
        audition: '319',
        type: 'lecture',
      },

      ...(isStaticEvenWeek
        ? []
        : ([
            {
              name: 'Безопасность',
              timeDuration: '16:20-18:00',
              teachers: ['Бондаренко Павел Игоревич'],
              audition: '319',
              type: 'lecture',
            },
          ] as IDayEvent[])),
    ],
  },

  {
    name: 'Пятница',
    events: [
      isStaticEvenWeek
        ? {
            name: 'ООС и ЭС',
            timeDuration: '12:15-13:55',
            teachers: ['Богдашич Елена Ефимовна'],
            audition: '205',
            type: 'lecture',
          }
        : {
            name: 'Сети',
            timeDuration: '12:15-13:55',
            teachers: ['Марков Владислав Игоревич'],
            audition: '318',
            type: 'lecture',
          },
      {
        name: 'Коммуникации',
        timeDuration: '14:10-15:50',
        teachers: ['Григорьева Анна Олеговна'],
        audition: '307',
        type: 'lecture',
      },
      {
        timeDuration: '15:50-16:20',
        type: 'lunch',
        name: 'Обед',
      },
      {
        name: 'Пд и УП',
        timeDuration: '16:20-18:00',
        teachers: ['Антонова Анна Владимировна'],
        audition: '309',
        type: 'lecture',
      },
    ],
  },

  {
    name: 'Суббота',
    events: [
      {
        name: 'Сети',
        timeDuration: '8:00-9:40',
        teachers: ['Марков Владислав Игоревич', 'Антипенко Татьяна Игоревна'],
        audition: '323',
        type: 'lecture',
      },
      {
        name: 'ИР ВР',
        timeDuration: '9:55-11:35',
        teachers: ['Марков Владислав Игоревич', 'Антипенко Татьяна Игоревна'],
        audition: '323',
        type: 'lecture',
      },
      {
        timeDuration: '11:35-12:15',
        type: 'lunch',
        name: 'Обед',
      },
      {
        name: 'Права',
        timeDuration: '12:15-13:55',
        teachers: ['Богдан Светлана Ивановна'],
        audition: '302',
        type: 'lecture',
      },
    ],
  },
] as const;

SHEDULE_CONFIG.forEach((el) => {
  //add day duration
  const firstEvent = el.events[0];
  const lastEvent = el.events[el.events.length - 1];

  if (firstEvent.type === 'lecture' && lastEvent.type === 'lecture') {
    el.duration = firstEvent.timeDuration.split('-')[0] + '-' + lastEvent.timeDuration.split('-')[1];
  }
});

export default SHEDULE_CONFIG;
