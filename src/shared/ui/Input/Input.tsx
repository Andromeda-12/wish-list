import clsx from "clsx";
import React from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ children, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={clsx(
        "px-5 py-2.5 border rounded-2xl text-sm",
        "border-blue-400 hover:border-blue-300",
        "",
        className
      )}
    >
      {children}
    </input>
  );
});

Input.displayName = "Button";
