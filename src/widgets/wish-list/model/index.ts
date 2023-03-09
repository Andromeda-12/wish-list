import { wishModel } from "@/entities/wish";
import { sample } from "effector";
import { createGate } from "effector-react";

export const wishListGate = createGate();
export const $isLoading = wishModel.loadWishListFx.pending;

sample({
  clock: wishListGate.open,
  target: wishModel.loadWishList,
});
