import { Button } from '@components/Button';
import { useRoutes } from '@hooks/useRoutes';
import { HTMLAttributes, ReactNode } from 'react';

interface ItemProps extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  text: string;
  open?: boolean;
  navigateTo: string;
}

export function Item({
  open = true,
  icon,
  text,
  navigateTo,
  ...props
}: ItemProps) {
  const { Link, pathname } = useRoutes();

  return (
    <Button.Root
      asChild
      active={navigateTo === pathname}
      size="sm"
      align={open ? 'start' : 'center'}
      className="w-full bg-transparent hover:bg-tertiary-200/70 data-[active=true]:bg-tertiary-200/70"
      {...props}
    >
      <Link to={navigateTo}>
        <Button.Icon className="text-black font-bold opacity-60  group-data-[active=true]:text-black">
          {icon}
        </Button.Icon>

        {open && (
          <Button.Text className="text-black font-bold opacity-60 group-data-[active=true]:text-black">
            {text}
          </Button.Text>
        )}
      </Link>
    </Button.Root>
  );
}

Item.displayName = 'SideBarNavigation.Item';
