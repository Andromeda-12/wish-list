import { useUnit } from "effector-react";
import { Button, Modal } from "@/shared/ui";
import { confirmModal, wishDeletionConfirme } from "../model";

export const ConfirmDeletionWish = () => {
  const isOpen = useUnit(confirmModal.$isOpen);
  const closeModal = useUnit(confirmModal.closeModal);
  const wishDeletionConfirmeFn = useUnit(wishDeletionConfirme);

  return (
    <Modal className="w-full max-w-md" isOpen={isOpen} onClose={closeModal}>
      <div className="text-center text-lg mb-10">
        Are you sure you want to delete this wish?
      </div>

      <div className="flex justify-center space-x-4">
        <Button onClick={closeModal}>Cancel</Button>
        <Button
          className="bg-transparent hover:bg-blue-400/30 !text-black"
          onClick={wishDeletionConfirmeFn}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};
