import { COLORS_CONFIG } from "../colors/colors.config"
import { currentDate } from "../day/day.config"
import { isEvenWeek } from "../time/time.config"
import { getCurrentDay } from "./helpers/get-current-day"
import type { IDay, IDayEvent, ILecture } from "./interfaces/days.interface"



const SHEDULE_CONFIG : IDay[]= [
 {
  name: 'Понедельник',
  events : [ 
    {
      name : 'Англ яз',
      timeDuration : '12:15-13:55',
      teacher : 'Прохорчук А.В.',
      teacherIF : 'Анна Владимировна',
      audition : '213',
      type: 'lecture',
    }, 

    {
      name : 'Физика',
      timeDuration : '14:10-15:50',
      teacher : 'Мороз Л.М.',
      teacherIF : 'Лариса Михайловна',
      audition : '216',
      type: 'lecture'

    },
    {
      timeDuration : '15:50-16:20',
      type: 'lunch',
      name: 'Обед'
    },
    {
      name : 'СиС',
      timeDuration : '16:20-18:00',
      teacher : 'Ханько А.В.',
      teacherIF : 'Андрей Викторович',
      audition : '314',
      type: 'lecture'

    }, 
    {
      name : 'СиС',
      timeDuration : '18:15-19:55',
      teacher : 'Ханько А.В.',
      teacherIF : 'Андрей Викторович',
      audition : '314',
      type: 'lecture'

    },
  ],
  color: COLORS_CONFIG.dayPassiveHeader ,
  isCurrent : false

 },
   
  {
  name: 'Вторник',
  events : [ 
    isEvenWeek 
  ? 
   {
      name : 'Англ яз',
      timeDuration : '9:55-11:35',
      teacher : 'Прохорчук А.В.',
      teacherIF : 'Анна Владимировна',
      audition : '213',
      type: 'lecture'

   }
   :
    {
      name : 'Физика',
      timeDuration : '9:55-11:35',
      teacher : 'Мороз Л.М.',
      teacherIF : 'Лариса Михайловна',
      audition : '310',
      type: 'lecture'

    },
     {
      timeDuration : '11:35-12:15',
      type: 'lunch',
      name: 'Обед'

    },
    {
      name : 'КПиЯП',
      timeDuration : '12:15-13:55',
      teacher : 'Янович Н.И.-Марков В.И.' ,
      teacherIF : 'Надежда Ивановна-Владислав Игоревич',
      audition : '323',
      type: 'lecture'

    },
    {
      name : 'КПиЯП',
      timeDuration : '14:10-15:50',
      teacher : 'Янович Н.И.-Марков В.И.' ,
      teacherIF : 'Надежда Ивановна-Владислав Игоревич',
      audition : '323',
      type: 'lecture'
    },
    
    ...(isEvenWeek ? [
      {
      timeDuration : '15:50-16:20',
      type: 'lunch',
      name: 'Обед',
    }, 
    {
      name : 'Физра',
      timeDuration : '16:20-18:00',
      teacher : 'Кривицкий С.В.-Праволоцкий А.Н.',
      teacherIF : 'Сергей Валентинович-Алексей Николаевич',
      audition : 'Спортзал',
      type: 'lecture'
    }   ] as IDayEvent[]: [])
  ],
  color: COLORS_CONFIG.dayPassiveHeader,
  isCurrent : false

 },

  {
  name: 'Среда',
  events : [ 
    {
      name : 'РиСБД',
      timeDuration : '12:15-13:55',
      teacher : 'Ерёменко Д.В.',
      teacherIF : 'Дарья Владимировна',
      audition : '309',
      type: 'lecture'

    },
   {
      name : 'РиСБД',
      timeDuration : '14:10-15:50',
      teacher : 'Ерёменко Д.В.',
      teacherIF : 'Дарья Владимировна',
      audition : '309',
      type: 'lecture'

    },
     {
      timeDuration : '15:50-16:20',
      type: 'lunch',
      name: 'Обед'

    },
    {
      name : 'История',
      timeDuration : '16:20-18:00',
      teacher : 'Ведерникова Л.Э.' ,
      teacherIF : 'Людмила Эдуардовна',
      audition : '310',
      type: 'lecture'

    },
  ],
  color: COLORS_CONFIG.dayPassiveHeader,
  isCurrent : false


 },

   {
  name: 'Четверг',
  events : [ 
    {
      name : 'Физра',
      timeDuration : '14:10-15:50',
      teacher : 'Кривицкий С.В.-Праволоцкий А.Н.',
      teacherIF : 'Сергей Валентинович-Алексей Николаевич',
      audition : 'Спортзал',
      type: 'lecture'

    },
     {
      timeDuration : '15:50-16:20',
      type: 'lunch',
      name: 'Обед'

    },
   {
      name : 'КПиЯП',
      timeDuration : '16:20-18:00',
      teacher : 'Янович Н.И.-Марков В.И.' ,
      teacherIF : 'Надежда Ивановна-Владислав Игоревич',
      audition : '323',
      type: 'lecture'

    },
     ...(!isEvenWeek ? [ {
      name : 'КПиЯП',
      timeDuration : '18:15-19:55',
      teacher : 'Янович Н.И.-Марков В.И.' ,
      teacherIF : 'Надежда Ивановна-Владислав Игоревич',
      audition : '323'
    } as ILecture ] : [])


   
  ],
  color: COLORS_CONFIG.dayPassiveHeader,
  isCurrent : false


 },

 {
  name: 'Пятница',
  events : [ 
    {
      name : 'Физика',
      timeDuration : '9:55-11:35',
      teacher : 'Мороз Л.М.',
      teacherIF : 'Лариса Михайловна',
      audition : '216',
      type: 'lecture'

    },
     {
      timeDuration : '11:35-12:15',
      type: 'lunch',
      name: 'Обед'

    },
     {
      name : 'Англ яз',
      timeDuration : '12:15-13:55',
      teacher : 'Прохорчук А.В.',
      teacherIF : 'Анна Владимировна',
      audition : '213',
      type: 'lecture'

    },
    {
      name : 'РиСБД',
      timeDuration : '14:10-15:50',
      teacher : 'Ерёменко Д.В.',
      teacherIF : 'Дарья Владимировна',
      audition : '309',
      type: 'lecture'

    },
     {
      timeDuration : '15:50-16:20',
      type: 'lunch',
      name: 'Обед'

    },
     isEvenWeek ? {  name : 'История',
      timeDuration : '16:20-18:00',
      teacher : 'Ведерникова Л.Э.' ,
      teacherIF : 'Людмила Эдуардовна',
      audition : '310',
      type: 'lecture'

    } : {
      name : 'РиСБД',
      timeDuration : '16:20-18:00',
      teacher : 'Ерёменко Д.В.',
      teacherIF : 'Дарья Владимировна',
      audition : '309',
      type: 'lecture'

    }  ],
  color: COLORS_CONFIG.dayPassiveHeader,
  isCurrent : false


 },
 
 {
  name: 'Суббота',
  events : [ 
    {
      name : 'Физика',
      timeDuration : '8:00-9:40',
      teacher : 'Мороз Л.М.',
      teacherIF : 'Лариса Михайловна',
      audition : '219',
      type: 'lecture'

    },
    {
      name : 'История',
      timeDuration : '9:55-11:35',
      teacher : 'Ведерникова Л.Э.' ,
      teacherIF : 'Людмила Эдуардовна',
      audition : '310',
      type: 'lecture'

    },
  ],
  color: COLORS_CONFIG.dayPassiveHeader,
  isCurrent : false


 },

] as const

 
SHEDULE_CONFIG.forEach((el, i) => {
  //add day duration

  const firstEvent = el.events[0]
  const lastEvent = el.events[el.events.length - 1]

  if(firstEvent.type === 'lecture' && lastEvent.type === 'lecture') {
    el.duration = firstEvent.timeDuration.split('-')[0] + '-' + lastEvent.timeDuration.split('-')[1];
  }

  //add active day header color
 if(i === getCurrentDay(currentDate)) { 
    el.isCurrent = true 
    el.color =  COLORS_CONFIG.dayActiveHeader
  }


})


export default SHEDULE_CONFIG;


