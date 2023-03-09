import { Card } from "@/shared/ui";
import { Wish } from "../model";
import { ReactNode } from "react";
import React from "react";
import { nanoid } from "nanoid";

interface WishProps {
  wish: Wish;
  extra: ReactNode[];
}

export const WishItem = ({ wish, extra }: WishProps) => {
  return (
    <Card className="px-5 py-4 flex justify-between border w-full space-y-1">
      <div>
        <div className="font-medium">{wish.title}</div>
        <div className="text-sm">Priority: {wish.priority}</div>
      </div>

      <div className="flex flex-col space-y-2">
        {extra.map((action) => (
          <React.Fragment key={nanoid()}>{action}</React.Fragment>
        ))}
      </div>
    </Card>
  );
};
