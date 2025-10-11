import { isEvenWeek } from '../time/time.config';
import type { IDay, IDayEvent, ILecture } from './interfaces/days.interface';

const SHEDULE_CONFIG: IDay[] = [
  {
    name: 'Понедельник',
    events: [
      {
        name: 'Англ яз',
        timeDuration: '12:15-13:55',
        teachers: ['Прохорчук Анна Владимировна'],
        audition: '213',
        type: 'lecture',
      },

      {
        name: 'Физика',
        timeDuration: '14:10-15:50',
        teachers: ['Мороз Лариса Михайловна'],
        audition: '216',
        type: 'lecture',
      },
      {
        timeDuration: '15:50-16:20',
        type: 'lunch',
        name: 'Обед',
      },
      {
        name: 'СиС',
        timeDuration: '16:20-18:00',
        teachers: ['Ханько Андрей Викторович'],
        audition: '314',
        type: 'lecture',
      },
      {
        name: 'СиС',
        timeDuration: '18:15-19:55',
        teachers: ['Ханько Андрей Викторович'],
        audition: '314',
        type: 'lecture',
      },
    ],
  },

  {
    name: 'Вторник',
    events: [
      isEvenWeek
        ? {
            name: 'Англ яз',
            timeDuration: '9:55-11:35',
            teachers: ['Прохорчук Анна Владимировна'],
            audition: '213',
            type: 'lecture',
          }
        : {
            name: 'Физика',
            timeDuration: '9:55-11:35',
            teachers: ['Мороз Лариса Михайловна'],
            audition: '310',
            type: 'lecture',
          },
      {
        timeDuration: '11:35-12:15',
        type: 'lunch',
        name: 'Обед',
      },
      {
        name: 'КПиЯП',
        timeDuration: '12:15-13:55',
        teachers: ['Янович Надежда Ивановна', 'Марков Владислав Игоревич'],
        audition: '323',
        type: 'lecture',
      },
      {
        name: 'КПиЯП',
        timeDuration: '14:10-15:50',
        teachers: ['Янович Надежда Ивановна', 'Марков Владислав Игоревич'],
        audition: '323',
        type: 'lecture',
      },

      ...(isEvenWeek
        ? ([
            {
              timeDuration: '15:50-16:20',
              type: 'lunch',
              name: 'Обед',
            },
            {
              name: 'Физра',
              timeDuration: '16:20-18:00',
              teachers: ['Кривицкий Сергей Валентинович', 'Праволоцкий Алексей Николаевич'],
              audition: 'Спортзал',
              type: 'lecture',
            },
          ] as IDayEvent[])
        : []),
    ],
  },

  {
    name: 'Среда',
    events: [
      {
        name: 'РиСБД',
        timeDuration: '12:15-13:55',
        teachers: ['Ерёменко Дарья Владимировна'],
        audition: '309',
        type: 'lecture',
      },
      {
        name: 'РиСБД',
        timeDuration: '14:10-15:50',
        teachers: ['Ерёменко Дарья Владимировна'],
        audition: '309',
        type: 'lecture',
      },
      {
        timeDuration: '15:50-16:20',
        type: 'lunch',
        name: 'Обед',
      },
      {
        name: 'История',
        timeDuration: '16:20-18:00',
        teachers: ['Ведерникова Людмила Эдуардовна'],
        audition: '310',
        type: 'lecture',
      },
    ],
  },

  {
    name: 'Четверг',
    events: [
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
        name: 'КПиЯП',
        timeDuration: '16:20-18:00',
        teachers: ['Янович Надежда Ивановна', 'Марков Владислав Игоревич'],
        audition: '323',
        type: 'lecture',
      },
      ...(!isEvenWeek
        ? [
            {
              name: 'КПиЯП',
              timeDuration: '18:15-19:55',
              teachers: ['Янович Надежда Ивановна', 'Марков Владислав Игоревич'],
              audition: '323',
              type: 'lecture',
            } as ILecture,
          ]
        : []),
    ],
  },

  {
    name: 'Пятница',
    events: [
      {
        name: 'Физика',
        timeDuration: '9:55-11:35',
        teachers: ['Мороз Лариса Михайловна'],
        audition: '216',
        type: 'lecture',
      },
      {
        timeDuration: '11:35-12:15',
        type: 'lunch',
        name: 'Обед',
      },
      {
        name: 'Англ яз',
        timeDuration: '12:15-13:55',
        teachers: ['Прохорчук Анна Владимировна'],
        audition: '213',
        type: 'lecture',
      },
      {
        name: 'РиСБД',
        timeDuration: '14:10-15:50',
        teachers: ['Ерёменко Дарья Владимировна'],
        audition: '309',
        type: 'lecture',
      },
      {
        timeDuration: '15:50-16:20',
        type: 'lunch',
        name: 'Обед',
      },
      isEvenWeek
        ? {
            name: 'История',
            timeDuration: '16:20-18:00',
            teachers: ['Ведерникова Людмила Эдуардовна'],
            audition: '310',
            type: 'lecture',
          }
        : {
            name: 'РиСБД',
            timeDuration: '16:20-18:00',
            teachers: ['Ведерникова Людмила Эдуардовна'],
            audition: '309',
            type: 'lecture',
          },
    ],
  },

  {
    name: 'Суббота',
    events: [
      {
        name: 'Физика',
        timeDuration: '8:00-9:40',
        teachers: ['Мороз Лариса Михайловна'],
        audition: '219',
        type: 'lecture',
      },
      {
        name: 'История',
        timeDuration: '9:55-11:35',
        teachers: ['Ведерникова Людмила Эдуардовна'],
        audition: '310',
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
