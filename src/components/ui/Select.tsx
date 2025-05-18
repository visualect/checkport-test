import * as React from "react";
import { Select as SelectPrimitive } from "radix-ui";
import { IoIosArrowDown } from "react-icons/io";

interface ISelect {
  value: string;
  onChange: (newVal: string) => void;
  placeholder?: string;
  children: React.ReactNode;
}

export default function Select({
  children,
  value,
  onChange,
  placeholder = "Выберите значение",
}: ISelect) {
  const [open, setOpen] = React.useState(false);

  return (
    <SelectPrimitive.Root
      value={value}
      onValueChange={(newVal) => onChange(newVal)}
      open={open}
      onOpenChange={setOpen}
    >
      <SelectPrimitive.Trigger className="flex items-center justify-between gap-2 py-[6px] px-[10px] h-[30px] rounded-c-medium w-full border border-c-dark-blue text-base placeholder:text-base placeholder:text-c-dark-blue/80 focus:outline-none">
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon
          className={`${open && "rotate-180"} transition-transform`}
        >
          <IoIosArrowDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        >
          <SelectPrimitive.Viewport className="p-[5px] transition-transform duration-300">
            {children}
            {/* {options.map((option) => { */}
            {/*   return <SelectItem value={option}>{option}</SelectItem>; */}
            {/* })} */}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

interface Props {
  value: number | string;
  label: string;
}

export const Option = ({ value, label }: Props) => {
  return <SelectItem value={value}>{label}</SelectItem>;
};

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        className={
          "relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-violet11 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none"
        }
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  },
);
