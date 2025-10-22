import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/modal';
import { DayEventList } from '../day-events-list/day-event-list';
import { useAtom, useAtomValue } from 'jotai';
import { selectedDayNameAtom, isDayEventsModalOpenAtom } from '../../app/store/jotai/atoms';

export function DayEventsModal() {
  const selectedDayName = useAtomValue(selectedDayNameAtom);
  const [isOpen, setIsOpen] = useAtom(isDayEventsModalOpenAtom);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      size="5xl"
      backdrop="blur"
      isOpen={isOpen}
      onClose={handleClose}
      scrollBehavior="inside"
      classNames={{ base: 'bg-[#431757] text-[#ffffff] pb-7 ', wrapper: ' items-center', body: 'flex items-center' }}
    >
      <ModalContent>
        <ModalHeader>{selectedDayName}</ModalHeader>
        <ModalBody>
          <DayEventList className="w-[90%]" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
