import React from "react";
import clsx from "clsx";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={clsx(
        "px-5 py-2.5 rounded-2xl inline-flex items-center justify-center text-sm font-medium transition duration-150 ease-in-out",
        "bg-blue-400 hover:bg-blue-300 text-white active:scale-95",
        "",
        className
      )}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
