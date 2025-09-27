import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import { DayEventList } from "../day-events-list/day-event-list";
import { useAtom, useAtomValue } from "jotai";
import { currentDayNameAtom, isDayEventsModalOpenAtom } from "../../app/store/jotai/atoms";


export function DayEventsModal (){

  const currentDayName = useAtomValue(currentDayNameAtom)
  const [isOpen, setIsOpen] = useAtom(isDayEventsModalOpenAtom)

  const handleClose = ()=> {
    setIsOpen(false)
  }

  return (
    <Modal size="5xl" backdrop='blur' isOpen={isOpen} onClose={handleClose} scrollBehavior="inside" classNames={{base : 'bg-[#431757] text-[#ffffff] pb-7 ', wrapper: " items-center", body: "flex items-center", }}>
        <ModalContent>
              <ModalHeader className="flex  flex-col gap-1">{currentDayName}</ModalHeader>
              <ModalBody >
                <DayEventList />
              </ModalBody>
        </ModalContent>
      </Modal>
  )

}
