import { createStore, sample, createEvent, createEffect } from "effector";
import { nanoid } from "nanoid";

export type Priority = "normal" | "high";

export interface Wish {
  id: string;
  title: string;
  priority: Priority;
  isHave: boolean;
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
    isHave?: boolean;
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

export const $wishList = createStore<Wish[]>([])
  .on(createWish, (wishList, newWish) => {
    const wish: Wish = {
      ...newWish,
      isHave: false,
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
    console.log(wishIndex);

    const updatedWishList = [...wishList];
    updatedWishList[wishIndex] = {
      ...updatedWishList[wishIndex],
      ...updatedWishData.wish,
    };

    console.log(updatedWishList);
    

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
