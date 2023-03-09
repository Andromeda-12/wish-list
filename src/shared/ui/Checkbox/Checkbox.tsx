import React from "react";
import clsx from "clsx";
import { Label } from "@radix-ui/react-label";
import { Root as CheckboxRoot, Indicator } from "@radix-ui/react-checkbox";
import { Icon } from "../Icon";

const CheckIcon = ({ className }: { className: string }) => (
  <Icon name="check" className={className} />
);

interface CheckboxProps {
  className?: string;
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, name, label, checked, disabled, onChange, ...rest }, ref) => {
    return (
      <div className={clsx("flex", className)}>
        <CheckboxRoot
          {...rest}
          id={name}
          onCheckedChange={onChange}
          checked={checked}
          disabled={disabled}
          className={clsx(
            "flex h-5 w-5 items-center justify-center rounded",
            "border-2",
            "focus:outline-none focus-visible:ring ring-primary dark:ring-secondary ring-offset-2 dark:ring-offset-neutral focus-visible:ring-opacity-75",
            "disabled:radix-state-checked:bg-primary/50 disabled:cursor-not-allowed"
          )}
        >
          <Indicator>
            <CheckIcon className="h-[17px] w-[17px] self-center text-blue-400 dark:text-white" />
          </Indicator>
        </CheckboxRoot>

        {label && (
          <Label htmlFor={name} className="ml-3 cursor-pointer text-sm">
            {label}
          </Label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
