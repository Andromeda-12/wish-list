import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "bg-white text-black dark:text-white dark:bg-slate-700 shadow-md rounded-xl dark:border-gray-700 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};
