import { combine, createEvent, createStore, sample } from "effector";
import { wishModel } from "@/entities/wish";

export type PriorityFilter = "none" | "normal" | "high";

export const filterValues = ["none", "normal", "high"];

export const setFilter = createEvent<PriorityFilter>();

export const $currentFilter = createStore<PriorityFilter>("none").on(
  setFilter,
  (_, filter) => filter
);

const filterFn = $currentFilter.map((filter) => {
  switch (filter) {
    case "normal":
      return (wish: wishModel.Wish) => wish.priority === "normal";

    case "high":
      return (wish: wishModel.Wish) => wish.priority === "high";

    case "none":
    default:
      return (wish: wishModel.Wish) => wish;
  }
});

export const $filteredWishList = combine(
  wishModel.$wishList,
  filterFn,
  (list, fn) => list.filter(fn)
);
