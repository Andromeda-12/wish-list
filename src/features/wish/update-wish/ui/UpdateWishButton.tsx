import { useUnit } from "effector-react";
import { wishModel } from "@/entities/wish";
import { IconButton } from "@/shared/ui";
import { UpdateWishModal } from "./UpdateWishModal";
import { setCurrenWish, updateWishModal } from "../model";

interface UpdateWishButtonProps {
  wish: wishModel.Wish;
}

export const UpdateWishButton = ({ wish }: UpdateWishButtonProps) => {
  const openModal = useUnit(updateWishModal.openModal);
  const isOpen = useUnit(updateWishModal.$isOpen);

  const handleClick = () => {
    setCurrenWish(wish);
    openModal();
  };

  return (
    <>
      {isOpen && <UpdateWishModal />}

      <IconButton iconName="pencil" onClick={handleClick} />
    </>
  );
};
