import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import type { ILecture } from "../../config/days.config";
import { LectureList } from "../lecture-list/lecture-list";

interface IProps {
  currentDayName?: string;
  currentLectures: ILecture[];
  isOpen: boolean;
  onClose: () => void
}

export function LecturesModal ({currentDayName, currentLectures, isOpen, onClose} : IProps){

  return (
    <Modal size="5xl" backdrop='blur' isOpen={isOpen} onClose={onClose} classNames={{base : 'bg-[#431757] text-[#ffffff] pb-7 ', wrapper: "overflow-hidden items-center", body: "flex items-center"}}>
        <ModalContent>
              <ModalHeader className="flex  flex-col gap-1">{currentDayName}</ModalHeader>
              <ModalBody >
                <LectureList lectures={currentLectures}/>
              </ModalBody>
        </ModalContent>
      </Modal>
  )

}
