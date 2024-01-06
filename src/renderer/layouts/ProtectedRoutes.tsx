import { useAuthenticatedCollaborator } from '@hooks/useAuthenticatedCollaborator';
import { useRoutes } from '@hooks/useRoutes';

export function ProtectedRoutes() {
  const { isAuthenticated } = useAuthenticatedCollaborator();
  const { Navigate, Outlet } = useRoutes();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
