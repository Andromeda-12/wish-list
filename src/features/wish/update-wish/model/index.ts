import { createEvent, restore, sample } from "effector";
import { wishModel } from "@/entities/wish";
import { createModal } from "@/shared/lib";

export const setCurrenWish = createEvent<wishModel.Wish>();
export const updateWish = wishModel.updateWish;

export const updateWishModal = createModal();

export const $currentWish = restore(setCurrenWish, null).reset(
  updateWishModal.closeModal
);

sample({
  clock: updateWish,
  target: updateWishModal.closeModal,
});
