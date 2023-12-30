import * as SelectPrimitive from '@radix-ui/react-select';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { LuCheck } from 'react-icons/lu';
import { tv } from 'tailwind-variants';

const itemStyles = tv({
  base: 'relative hover:bg-zinc-300 flex w-full cursor-pointer select-none items-center rounded-sm py-2.5 pl-10 pr-2 text-sm outline-none focus:bg-gray500 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
});

export const Item = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={itemStyles({ className })}
    {...props}
  >
    <span className="absolute left-2 flex min-h-3.5 min-w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <LuCheck className="-ml-4 w-4 h-4" />
      </SelectPrimitive.ItemIndicator>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </span>
  </SelectPrimitive.Item>
));
