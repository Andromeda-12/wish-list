import { sample } from "effector";
import { wishModel } from "@/entities/wish";
import { createModal } from "@/shared/lib";

export const createWishModal = createModal();

export const createWish = wishModel.createWish;

sample({
  clock: createWish,
  target: createWishModal.closeModal,
});
