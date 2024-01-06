import { DashboardNavigation } from '@components/DashboardNavigation';
import { useRoutes } from '@hooks/useRoutes';

export function DashboardLayout() {
  const { Outlet } = useRoutes();

  return (
    <section className="flex flex-row w-screen h-screen">
      <DashboardNavigation />
      <Outlet />
    </section>
  );
}
