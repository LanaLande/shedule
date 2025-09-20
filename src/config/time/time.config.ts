import { getIsEvenWeek } from "./helpers/is-even-week"

export const currentDate = new Date('March 1 1 12:00')
export const isEvenWeek = getIsEvenWeek(currentDate);