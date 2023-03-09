import { createStore, sample, createEvent, createEffect } from "effector";
import { nanoid } from "nanoid";

export type Priority = "normal" | "high";

export interface Wish {
  id: string;
  title: string;
  priority: Priority;
  isDone: boolean;
}

interface CreateWish {
  title: string;
  priority: Priority;
}

interface UpdateWish {
  id: string;
  wish: {
    title?: string;
    priority?: Priority;
    isDone?: boolean;
  };
}

export const saveWishListFx = createEffect<Wish[], void>((wishList) =>
  localStorage.setItem("wishList", JSON.stringify(wishList))
);
export const loadWishListFx = createEffect<void, Wish[] | null>(() => {
  const wishList = localStorage.getItem("wishList");
  if (!wishList) return null;
  return JSON.parse(wishList);
});

export const loadWishList = createEvent();
export const createWish = createEvent<CreateWish>();
export const removeWish = createEvent<string>();
export const updateWish = createEvent<UpdateWish>();
export const toggleDoneWish = createEvent<string>();

export const $wishList = createStore<Wish[]>([])
  .on(createWish, (wishList, newWish) => {
    const wish: Wish = {
      ...newWish,
      isDone: false,
      id: nanoid(),
    };

    return [...wishList, wish];
  })
  .on(removeWish, (wishList, wishId) =>
    wishList.filter((wish) => wish.id !== wishId)
  )
  .on(updateWish, (wishList, updatedWishData) => {
    const wishIndex = wishList.findIndex(
      (wish) => wish.id === updatedWishData.id
    );

    const updatedWishList = [...wishList];
    updatedWishList[wishIndex] = {
      ...updatedWishList[wishIndex],
      ...updatedWishData.wish,
    };

    return updatedWishList;
  })
  .on(toggleDoneWish, (wishList, wishId) => {
    const wishIndex = wishList.findIndex((wish) => wish.id === wishId);

    const updatedWishList = [...wishList];
    const currentWish = updatedWishList[wishIndex];

    updatedWishList[wishIndex] = {
      ...currentWish,
      isDone: !currentWish.isDone,
    };

    return updatedWishList;
  });

sample({
  clock: $wishList,
  target: saveWishListFx,
});
sample({
  clock: loadWishList,
  target: loadWishListFx,
});
sample({
  clock: loadWishListFx.doneData,
  filter: Boolean,
  target: $wishList,
});
