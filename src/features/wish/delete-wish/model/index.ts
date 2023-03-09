import { createEvent, restore, sample } from "effector";
import { wishModel } from "@/entities/wish";
import { createModal } from "@/shared/lib";

export const wishDeletionConfirme = createEvent();
export const setCurrenWish = createEvent<wishModel.Wish>();

export const confirmModal = createModal();

export const $currentWish = restore(setCurrenWish, null).reset(
  confirmModal.closeModal
);

sample({
  clock: wishDeletionConfirme,
  source: $currentWish,
  filter: Boolean,
  fn: (currentWish) => currentWish.id,
  target: wishModel.removeWish,
});

sample({
  clock: wishModel.removeWish,
  target: confirmModal.closeModal,
});
