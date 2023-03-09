import { useUnit } from "effector-react";
import { Select } from "@/shared/ui";
import {
  $currentFilter,
  PriorityFilter,
  filterValues,
  setFilter,
} from "../model";

export const WishPriorityFilter = () => {
  const currentFilter = useUnit($currentFilter);
  const setFilterFn = useUnit(setFilter);

  return (
    <div className="flex items-center space-x-4">
      <div className="text-sm sm:text-base">Priority filter:</div>

      <Select
        values={filterValues}
        defaultValue={currentFilter}
        onChange={(value) => setFilterFn(value as PriorityFilter)}
      />
    </div>
  );
};
