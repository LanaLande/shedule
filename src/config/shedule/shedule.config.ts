import { COLORS_CONFIG } from "../colors/colors.config"
import { currentDate } from "../day/day.config"
import { isEvenWeek } from "../time/time.config"
import { getCurrentDay } from "./helpers/get-current-day"
import type { IDay, ILecture } from "./interfaces/shedule.interface"



const SHEDULE_CONFIG : IDay[]= [
 {
  name: 'Понедельник',
  lectures : [ 
    {
      name : 'Англ яз',
      timeDuration : '12:15-13:55',
      teacher : 'Прохорчук А.В.',
      teacherIF : 'Анна Владимировна',
      audition : '213'
    },
    {
      name : 'Физика',
      timeDuration : '14:10-15:50',
      teacher : 'Мороз Л.М.',
      teacherIF : 'Лариса Михайловна',
      audition : '216'
    },
    {
      name : 'СиС',
      timeDuration : '16:20-18:00',
      teacher : 'Ханько А.В.',
      teacherIF : 'Андрей Викторович',
      audition : '314'
    }, 
    {
      name : 'СиС',
      timeDuration : '18:15-19:55',
      teacher : 'Ханько А.В.',
      teacherIF : 'Андрей Викторович',
      audition : '314'
    },
  ],
  color: COLORS_CONFIG.dayPassiveHeader 
 },
   
  {
  name: 'Вторник',
  lectures : [ 
    isEvenWeek 
  ? 
   {
      name : 'Англ яз',
      timeDuration : '9:55-11:35',
      teacher : 'Прохорчук А.В.',
      teacherIF : 'Анна Владимировна',
      audition : '213'
   }
   :
    {
      name : 'Физика',
      timeDuration : '9:55-11:35',
      teacher : 'Мороз Л.М.',
      teacherIF : 'Лариса Михайловна',
      audition : '310'
    },
    {
      name : 'КПиЯП',
      timeDuration : '12:15-13:55',
      teacher : 'Янович Н.И.-Марков В.И.' ,
      teacherIF : 'Надежда Ивановна-Владислав Игоревич',
      audition : '323'
    },
    {
      name : 'КПиЯП',
      timeDuration : '14:10-15:50',
      teacher : 'Янович Н.И.-Марков В.И.' ,
      teacherIF : 'Надежда Ивановна-Владислав Игоревич',
      audition : '323'
    },
    ...(isEvenWeek ? [{
      name : 'Физра',
      timeDuration : '16:20-18:00',
      teacher : 'Кривицкий С.В.-Праволоцкий А.Н.',
      teacherIF : 'Сергей Валентинович-Алексей Николаевич',
      audition : 'Спортзал'
    } as ILecture ] : [])
  ],
  color: COLORS_CONFIG.dayPassiveHeader 

 },

  {
  name: 'Среда',
  lectures : [ 
    {
      name : 'РиСБД',
      timeDuration : '12:15-13:55',
      teacher : 'Ерёменко Д.В.',
      teacherIF : 'Дарья Владимировна',
      audition : '309'
    },
   {
      name : 'РиСБД',
      timeDuration : '14:10-15:50',
      teacher : 'Ерёменко Д.В.',
      teacherIF : 'Дарья Владимировна',
      audition : '309'
    },
    {
      name : 'История',
      timeDuration : '16:20-18:00',
      teacher : 'Ведерникова Л.Э.' ,
      teacherIF : 'Людмила Эдуардовна',
      audition : '310'
    },
  ],
  color: COLORS_CONFIG.dayPassiveHeader 

 },

   {
  name: 'Четверг',
  lectures : [ 
    {
      name : 'Физра',
      timeDuration : '14:10-15:50',
      teacher : 'Кривицкий С.В.-Праволоцкий А.Н.',
      teacherIF : 'Сергей Валентинович-Алексей Николаевич',
      audition : 'Спортзал'
    },
   {
      name : 'КПиЯП',
      timeDuration : '16:20-18:00',
      teacher : 'Янович Н.И.-Марков В.И.' ,
      teacherIF : 'Надежда Ивановна-Владислав Игоревич',
      audition : '323'
    },
     ...(!isEvenWeek ? [ {
      name : 'КПиЯП',
      timeDuration : '18:15-19:55',
      teacher : 'Янович Н.И.-Марков В.И.' ,
      teacherIF : 'Надежда Ивановна-Владислав Игоревич',
      audition : '323'
    } as ILecture ] : [])


   
  ],
  color: COLORS_CONFIG.dayPassiveHeader 

 },

 {
  name: 'Пятница',
  lectures : [ 
    {
      name : 'Физика',
      timeDuration : '9:55-11:35',
      teacher : 'Мороз Л.М.',
      teacherIF : 'Лариса Михайловна',
      audition : '216'
    },
     {
      name : 'Англ яз',
      timeDuration : '12:15-13:55',
      teacher : 'Прохорчук А.В.',
      teacherIF : 'Анна Владимировна',
      audition : '213'
    },
    {
      name : 'РиСБД',
      timeDuration : '14:10-15:50',
      teacher : 'Ерёменко Д.В.',
      teacherIF : 'Дарья Владимировна',
      audition : '309'
    },
     isEvenWeek ? {  name : 'История',
      timeDuration : '18:15-19:55',
      teacher : 'Ведерникова Л.Э.' ,
      teacherIF : 'Людмила Эдуардовна',
      audition : '310'
    } : {
      name : 'РиСБД',
      timeDuration : '16:20-18:00',
      teacher : 'Ерёменко Д.В.',
      teacherIF : 'Дарья Владимировна',
      audition : '309'
    }  ],
  color: COLORS_CONFIG.dayPassiveHeader 

 },
 
 {
  name: 'Суббота',
  lectures : [ 
    {
      name : 'Физика',
      timeDuration : '8:00-9:40',
      teacher : 'Мороз Л.М.',
      teacherIF : 'Лариса Михайловна',
      audition : '310'
    },
    {
      name : 'История',
      timeDuration : '9:55-11:35',
      teacher : 'Ведерникова Л.Э.' ,
      teacherIF : 'Людмила Эдуардовна',
      audition : '310'
    },
  ],
  color: COLORS_CONFIG.dayPassiveHeader 

 },

] as const

 
SHEDULE_CONFIG.forEach((el, i) => {
  //add day duration
  el.duration = el.lectures[0].timeDuration.split('-')[0] + '-' + el.lectures[el.lectures.length - 1].timeDuration.split('-')[1];

  //add colors
 if(i === getCurrentDay(currentDate)) { 
    el.isCurrent = true 
    el.color =  COLORS_CONFIG.dayActiveHeader
  }


})


export default SHEDULE_CONFIG;


