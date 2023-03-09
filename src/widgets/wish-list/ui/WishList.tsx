import { useGate, useUnit } from "effector-react";
import { WishItem, wishModel } from "@/entities/wish";
import { wishListGate, $isLoading } from "../model";
import { Button } from "@/shared/ui";
import { DeleteWishButton } from "@/features/wish/delete-wish";
import { UpdateWishButton } from "@/features/wish/update-wish";

export const WishList = () => {
  useGate(wishListGate);

  const wishList = useUnit(wishModel.$wishList);
  const isLoading = useUnit($isLoading);

  if (isLoading) return <div>Loading...</div>;

  if (wishList.length == 0)
    return (
      <div className="w-full text-center">
        Any wishes? It's time to add them! <span className="text-xl">🌠</span>
      </div>
    );

  return (
    <div className="space-y-3 w-full">
      {wishList.map((wish) => (
        <WishItem
          wish={wish}
          extra={[<DeleteWishButton wish={wish} />, <UpdateWishButton wish={wish} />]}
          key={wish.id}
        />
      ))}
    </div>
  );
};
