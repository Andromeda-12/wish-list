import { CreateWishButton } from "@/features/wish/create-wish";
import { WishList } from "@/widgets/wish-list";

export const MainPage = () => {
  return (
    <div className="w-full m-auto sm:w-6/12 py-12">
      <div className="mb-5 flex justify-end">
        <CreateWishButton />
      </div>

      <WishList />
    </div>
  );
};
