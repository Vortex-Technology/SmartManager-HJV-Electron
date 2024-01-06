import { Slot } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const rootStyles = tv({
  base: 'flex flex-col gap-1 ease-in-out duration-200',
  variants: {
    open: {
      true: 'min-w-[18%] w-[18%]',
      false: 'min-w-[4.5%] max-w-[4.5%] w-[4.5%]',
    },
  },

  defaultVariants: {
    open: true,
  },
});

interface RootProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof rootStyles> {
  asChild?: boolean;
}

export function Root({ asChild, className, open, ...props }: RootProps) {
  const Component = asChild ? Slot : 'aside';

  return <Component {...props} className={rootStyles({ className, open })} />;
}

Root.displayName = 'SideBarNavigation.Root';
