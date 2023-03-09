import { Card } from "@/shared/ui";
import { Wish } from "../model";
import { ReactNode } from "react";
import React from "react";
import { nanoid } from "nanoid";
import clsx from "clsx";

interface WishProps {
  wish: Wish;
  extra: ReactNode[];
}

export const WishItem = ({ wish, extra }: WishProps) => {
  return (
    <Card
      className={clsx(
        "px-5 py-4 flex justify-between border w-full duration-150",
        wish.isDone && "!bg-blue-300/20"
      )}
    >
      <div className="space-y-2">
        <div className={clsx("font-medium text-lg", wish.isDone && "line-through")}>
          {wish.title}
        </div>
        <div className="text-sm">Priority: {wish.priority}</div>
      </div>

      <div className="flex items-center flex-col space-y-2">
        {extra.map((action) => (
          <React.Fragment key={nanoid()}>{action}</React.Fragment>
        ))}
      </div>
    </Card>
  );
};
