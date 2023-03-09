import { useUnit } from "effector-react";
import { Button, IconButton } from "@/shared/ui";
import { CreateWishModal } from "./CreateWishModal";
import { createWishModal } from "../model";

export const CreateWishButton = () => {
  const openModal = useUnit(createWishModal.openModal);
  const isOpen = useUnit(createWishModal.$isOpen);

  return (
    <>
      {isOpen && <CreateWishModal />}

      <Button onClick={openModal}>
        <span className="hidden sm:block">Add wish</span>
        <span className="sm:hidden">Add</span>
      </Button>
    </>
  );
};
