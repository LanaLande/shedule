import { atom } from 'jotai'
import DAYS_CONFIG from '../../../config/shedule/shedule.config'
import type { IDay, IDayEvent } from '../../../config/shedule/interfaces/days.interface'

export const currentDayEventsAtom = atom<IDayEvent[]>(DAYS_CONFIG[0].events)
export const currentDayNameAtom = atom<IDay['name']>(DAYS_CONFIG[0].name)
export const isCurrentDayAtom = atom<boolean>(false)
export const isDayEventsModalOpenAtom = atom<boolean>(false)

