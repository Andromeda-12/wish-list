import { useUnit } from "effector-react";
import { wishModel } from "@/entities/wish";
import { Checkbox } from "@/shared/ui";
import { toggleDoneWish } from "../model";

interface ToggleDoneWishProps {
  wish: wishModel.Wish;
}

export const ToggleDoneWish = ({ wish }: ToggleDoneWishProps) => {
  const toggleDoneWishFn = useUnit(toggleDoneWish);

  return (
    <Checkbox
      checked={wish.isDone}
      onChange={() => toggleDoneWishFn(wish.id)}
    />
  );
};
