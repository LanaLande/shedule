import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import type { IDayEvent } from "../../config/shedule/interfaces/days.interface";
import { DayEventList } from "../day-events-list/day-event-list";

interface IProps {
  currentDayName?: string;
  currentEvents: IDayEvent[];
  isOpen: boolean;
  onClose: () => void
  isCurrentDay : boolean
}

export function DayEventsModal ({currentDayName, currentEvents: currentEvents,
  isCurrentDay, isOpen, onClose} : IProps){

  return (
    <Modal size="5xl" backdrop='blur' isOpen={isOpen} onClose={onClose} scrollBehavior="inside" classNames={{base : 'bg-[#431757] text-[#ffffff] pb-7 ', wrapper: " items-center", body: "flex items-center", }}>
        <ModalContent>
              <ModalHeader className="flex  flex-col gap-1">{currentDayName}</ModalHeader>
              <ModalBody >
                <DayEventList events={currentEvents} isCurrentDay={isCurrentDay} />
              </ModalBody>
        </ModalContent>
      </Modal>
  )

}
