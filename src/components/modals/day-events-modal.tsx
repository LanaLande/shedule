import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/modal';
import { DayEventList } from '../day-events-list/day-event-list';
import { useAtom, useAtomValue } from 'jotai';
import { selectedDayNameAtom, isDayEventsModalOpenAtom } from '../../app/store/jotai/atoms';
import { COLORS_CONFIG } from '../../app/config/colors/colors.config';
import clsx from 'clsx';

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
      classNames={{
        header: COLORS_CONFIG.headerTextClassName,
        base: clsx( COLORS_CONFIG.modalBgClassName, COLORS_CONFIG.textClassName ),
        wrapper: 'items-center px-2',
        body: 'flex items-center px-2',
        backdrop: COLORS_CONFIG.modalBgWrapperClassName,
        closeButton: COLORS_CONFIG.modalCloseButtonClassName,
      }}
    >
      <ModalContent>
        <ModalHeader>{selectedDayName}</ModalHeader>
        <ModalBody>
          <DayEventList className="w-full sm:w-[90%]" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

