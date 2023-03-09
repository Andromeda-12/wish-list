import * as SelectPrimitive from "@radix-ui/react-select";
import { Button, Icon } from "@/shared/ui";
import { clsx } from "clsx";

interface SelectProps {
  values: string[];
  defaultValue?: string;
  onChange: (value: string) => void;
}

export const Select = ({ values, defaultValue, onChange }: SelectProps) => {
  return (
    <SelectPrimitive.Root
      defaultValue={defaultValue || values[0]}
      onValueChange={onChange}
    >
      <SelectPrimitive.Trigger asChild>
        <Button>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className="ml-2">
            <Icon name="chevronDown" />
          </SelectPrimitive.Icon>
        </Button>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Content>
        <SelectPrimitive.Group className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
          {values.map((value, i) => (
            <SelectPrimitive.Item
              key={`${value}-${i}`}
              value={value.toLowerCase()}
              className={clsx(
                "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900",
                "radix-disabled:opacity-50",
                "focus:outline-none select-none"
              )}
            >
              <SelectPrimitive.ItemText>{value}</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                <Icon name="check" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Group>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};
