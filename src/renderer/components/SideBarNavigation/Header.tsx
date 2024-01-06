import { Logo } from '@components/Logo';
import { Slot } from '@radix-ui/react-slot';
import { Search } from 'lucide-react';
import { HTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';

const headerStyles = tv({
  base: 'flex gap-1 w-full h-12 p-2 items-center justify-between border-b border-b-neutral-200',
  variants: {
    open: {
      false: 'justify-center',
    },
  },
});

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  open?: boolean;
  setIsOpen: (open: boolean) => void;
}

export function Header({
  asChild,
  className,
  open = true,
  setIsOpen,
  ...props
}: HeaderProps) {
  const Component = asChild ? Slot : 'div';

  return (
    <Component {...props} className={headerStyles({ className, open })}>
      <button type="button" onClick={() => setIsOpen(!open)}>
        <Logo
          size="xs"
          className="opacity-75 font-bold"
          isToShowTitle={open}
          title="Smart Manager"
        />
      </button>

      {/* TO-DO: make logic for this */}
      {open && (
        <button
          type="button"
          className="hover:bg-neutral-200 w-6 h-6 flex items-center justify-center  rounded-sm ease-in-out duration-200"
        >
          <Search size={18} className="leading-none" />
        </button>
      )}
    </Component>
  );
}

Header.displayName = 'SideBarNavigation.Header';
