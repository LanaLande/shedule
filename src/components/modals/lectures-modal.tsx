import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import { LectureList } from "../lecture-list/lecture-list";
import type { ILecture } from "../../config/shedule/interfaces/shedule.interface";

interface IProps {
  currentDayName?: string;
  currentLectures: ILecture[];
  isOpen: boolean;
  onClose: () => void
  isCurrentDay? : boolean
}

export function LecturesModal ({currentDayName, currentLectures,
  isCurrentDay, isOpen, onClose} : IProps){

  return (
    <Modal size="5xl" backdrop='blur' isOpen={isOpen} onClose={onClose} classNames={{base : 'bg-[#431757] text-[#ffffff] pb-7 ', wrapper: "overflow-hidden items-center", body: "flex items-center"}}>
        <ModalContent>
              <ModalHeader className="flex  flex-col gap-1">{currentDayName}</ModalHeader>
              <ModalBody >
                <LectureList lectures={currentLectures} isCurrentDay={isCurrentDay} />
              </ModalBody>
        </ModalContent>
      </Modal>
  )

}
