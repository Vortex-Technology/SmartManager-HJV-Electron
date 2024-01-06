import { Slot } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const navigationStyles = tv({
  base: 'flex flex-col gap-2 w-full p-2 ease-in-out duration-200',
  variants: {
    open: {
      true: '',
      false: '',
    },
  },

  defaultVariants: {
    open: true,
  },
});

interface NavigationProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof navigationStyles> {
  asChild?: boolean;
}

export function Navigation({
  asChild,
  className,
  open,
  ...props
}: NavigationProps) {
  const Component = asChild ? Slot : 'nav';

  return (
    <Component {...props} className={navigationStyles({ className, open })} />
  );
}

Navigation.displayName = 'SideBarNavigation.Navigation';
