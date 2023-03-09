import { CreateWishButton } from "@/features/wish/create-wish";
import { WishPriorityFilter } from "@/features/wish/wish-priority-filter";
import { WishList } from "@/widgets/wish-list";

export const MainPage = () => {
  return (
    <div className="m-auto w-11/12 sm:w-6/12 py-12">
      <div className="mb-5 flex justify-between">
        <WishPriorityFilter />

        <CreateWishButton />
      </div>

      <WishList />
    </div>
  );
};
