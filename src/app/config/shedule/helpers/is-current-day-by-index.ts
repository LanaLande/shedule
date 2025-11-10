
export function isCurrentDayByIndex({ currDayIdx, currentDate }: { currDayIdx: number; currentDate: Date }): boolean {
  const rawlCurrentDay = currentDate.getDay();

  if (rawlCurrentDay == 0) return currDayIdx === 6;
  return currDayIdx === rawlCurrentDay - 1;
}

