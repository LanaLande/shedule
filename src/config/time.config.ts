import { getIsEvenWeek } from "./helpers/is-even-week"

export const currentDate = new Date()
export const isEvenWeek = getIsEvenWeek(currentDate);