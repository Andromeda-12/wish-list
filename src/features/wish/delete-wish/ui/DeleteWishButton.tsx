import { useUnit } from "effector-react";
import { wishModel } from "@/entities/wish";
import { Button } from "@/shared/ui";
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

      <Button
        className="bg-transparent hover:bg-red-100 !text-red-400 hover:text-red-500"
        onClick={handleClick}
      >
        Delete
      </Button>
    </>
  );
};
