import { SideBarNavigation } from '@components/SideBarNavigation';
import {
  Boxes,
  ClipboardList,
  LayoutDashboard,
  ShoppingBag,
  Users,
  Trash,
} from 'lucide-react';
import { useState } from 'react';

export function DashboardNavigation() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SideBarNavigation.Root open={isOpen}>
      <SideBarNavigation.Header open={isOpen} setIsOpen={setIsOpen} />

      <SideBarNavigation.Navigation open={isOpen}>
        <SideBarNavigation.Item
          open={isOpen}
          icon={<LayoutDashboard />}
          text="Dashboard"
          navigateTo="/dashboard"
        />

        <SideBarNavigation.Item
          open={isOpen}
          icon={<Boxes />}
          text="Produtos"
          navigateTo="/dashboard/products"
        />

        <SideBarNavigation.Item
          open={isOpen}
          icon={<ShoppingBag />}
          text="Vendas"
          navigateTo="/dashboard/sales"
        />

        <SideBarNavigation.Item
          open={isOpen}
          icon={<Users />}
          text="Colaboradores"
          navigateTo="/dashboard/collaborators"
        />

        <SideBarNavigation.Item
          open={isOpen}
          icon={<ClipboardList />}
          text="Relatório"
          navigateTo="/dashboard/reports"
        />

        <SideBarNavigation.Item
          open={isOpen}
          icon={<Trash />}
          text="Excluir Admin"
          navigateTo="/dashboard/collaborators/delete/:id"
        />
      </SideBarNavigation.Navigation>
    </SideBarNavigation.Root>
  );
}
