import React from "react";
import clsx from "clsx";
import { Icon } from "../Icon";

export interface IconButtonProps extends React.ComponentProps<"button"> {
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  iconName: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, className, iconName, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={clsx(
          "w-7 h-7 rounded-lg inline-flex items-center justify-center text-sm font-medium transition duration-150 ease-in-out",
          "bg-blue-400 hover:bg-blue-300 text-white active:scale-95",
          "",
          className
        )}
      >
        <Icon size="sm" name={iconName} />
      </button>
    );
  }
);
