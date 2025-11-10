import type { IDayEvent, ILecture } from '../../../../app/config/shedule/interfaces/days.interface';

const getCalcDate = (currentDate: Date, hours: number, minutes: number, seconds: number = 0) => {
  return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes, seconds);
};

export class EventTiming {
  startHours: number;
  startMinutes: number;
  endHours: number;
  endMinutes: number;
  startCalcDate: Date;
  endCalcDate: Date;
  currentDate: Date;

  constructor(event: IDayEvent, currentDate: Date) {
    this.currentDate = currentDate;
    const startHoursAndMinutesStr: string = event.timeDuration.split('-')[0];
    const endHoursAndMinutesStr: string = event.timeDuration.split('-')[1];
    this.startHours = +startHoursAndMinutesStr.split(':')[0];
    this.startMinutes = +startHoursAndMinutesStr.split(':')[1];
    this.endHours = +endHoursAndMinutesStr.split(':')[0];
    this.endMinutes = +endHoursAndMinutesStr.split(':')[1];

    this.startCalcDate = getCalcDate(this.currentDate, this.startHours, this.startMinutes);
    this.endCalcDate = getCalcDate(this.currentDate, this.endHours, this.endMinutes);
  }
}

export class LectureTiming extends EventTiming {
  breakStartHours: number;
  breakStartMinutes: number;
  breakEndHours: number;
  breakEndMinutes: number;
  breakStartCalcDate: Date;
  breakEndCalcDate: Date;

  constructor(event: ILecture, currentDate: Date) {
    super(event, currentDate);

    this.breakStartCalcDate = getCalcDate(this.currentDate, this.startHours, this.startMinutes + 45);
    this.breakEndCalcDate = getCalcDate(this.currentDate, this.endHours, this.endMinutes - 45);

    this.breakStartHours = this.breakStartCalcDate.getHours();
    this.breakStartMinutes = this.breakStartCalcDate.getMinutes();
    this.breakEndHours = this.breakEndCalcDate.getHours();
    this.breakEndMinutes = this.breakEndCalcDate.getHours();
  }
}
