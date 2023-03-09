import { useUnit } from "effector-react";
import { wishModel } from "@/entities/wish";
import { IconButton } from "@/shared/ui";
import { ConfirmDeletionWish } from "./ConfirmDeletionWish";
import { confirmModal, setCurrenWish } from "../model";

interface DeleteWishButtonProps {
  wish: wishModel.Wish;
}

export const DeleteWishButton = ({ wish }: DeleteWishButtonProps) => {
  const openConfirmModal = useUnit(confirmModal.openModal);
  const setCurrenWishFn = useUnit(setCurrenWish);

  const handleClick = () => {
    setCurrenWishFn(wish);
    openConfirmModal();
  };

  return (
    <>
      <ConfirmDeletionWish />

      <IconButton iconName="trash" onClick={handleClick} />
    </>
  );
};
