import { currentDate } from "../day/day.config";
import { getIsEvenWeek } from "./helpers/is-even-week"

export const isEvenWeek = getIsEvenWeek(currentDate);