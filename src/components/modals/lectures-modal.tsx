import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import type { ILecture } from "../../config/days.config";

interface IProps {
  currentDayName?: string;
  currentLectures?: ILecture[];
  isOpen: boolean;
  onClose: () => void
}

export function LecturesModal ({currentDayName, currentLectures, isOpen, onClose} : IProps){

  console.log(currentLectures)

  return (
    <Modal backdrop='blur' isOpen={isOpen} onClose={onClose} >
      <>
        <ModalContent>
              <ModalHeader className="flex flex-col gap-1">{currentDayName}</ModalHeader>
              <ModalBody>
                {currentDayName}
              </ModalBody>
        </ModalContent>
      </>
      </Modal>
  )

}
