import { sample } from "effector";
import { createGate } from "effector-react";
import { wishPriorityFilterModel } from "@/features/wish/wish-priority-filter";
import { wishModel } from "@/entities/wish";

export const wishListGate = createGate();
export const $isLoading = wishModel.loadWishListFx.pending;

export const $filteredWishList = wishPriorityFilterModel.$filteredWishList;
export const $currentFilter = wishPriorityFilterModel.$currentFilter;

sample({
  clock: wishListGate.open,
  target: wishModel.loadWishList,
});
