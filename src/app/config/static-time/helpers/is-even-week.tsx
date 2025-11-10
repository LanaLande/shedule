import { getWeek } from "date-fns/getWeek"

export function getIsEvenWeek(currentDate : Date) {
return !(getWeek(currentDate, { weekStartsOn: 1}) % 2 === 0)
}