import { useGate, useUnit } from "effector-react";
import { UpdateWishButton } from "@/features/wish/update-wish";
import { ToggleDoneWish } from "@/features/wish/done-wish";
import { WishItem } from "@/entities/wish";
import {
  wishListGate,
  $isLoading,
  $filteredWishList,
  $currentFilter,
} from "../model";

export const WishList = () => {
  useGate(wishListGate);

  const filteredWishList = useUnit($filteredWishList);
  const isLoading = useUnit($isLoading);
  const currentFilter = useUnit($currentFilter);

  if (isLoading) return <div>Loading...</div>;

  if (filteredWishList.length == 0 && currentFilter !== "none")
    return (
      <div className="w-full text-center">
        Still no wish with <span className="font-semibold">{currentFilter}</span> priority
      </div>
    );

  if (filteredWishList.length == 0)
    return (
      <div className="w-full text-center">
        Any wishes? It's time to add them! <span className="text-xl">🌠</span>
      </div>
    );

  return (
    <div className="space-y-3 w-full">
      {filteredWishList.map((wish) => (
        <WishItem
          wish={wish}
          extra={[
            <UpdateWishButton wish={wish} />,
            <ToggleDoneWish wish={wish} />,
          ]}
          key={wish.id}
        />
      ))}
    </div>
  );
};
