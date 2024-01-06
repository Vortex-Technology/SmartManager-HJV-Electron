import { DashboardLayout } from '@layouts/DashboardLayout';
import { ProtectedRoutes } from '@layouts/ProtectedRoutes';
import { CreateAdministratorRegisterPage } from '@pages/CreateAdministratorRegister';
import { CreateCollaboratorRegisterPage } from '@pages/CreateCollaboratorRegister';
import { DashboardPage } from '@pages/Dashboard';
import { Route } from 'react-router-dom';

export function DashboardRoutes() {
  return [
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/dashboard/products" element={<DashboardPage />} />

        <Route path="/dashboard/sales" element={<DashboardPage />} />

        <Route path="/dashboard/collaborators" element={<DashboardPage />} />

        <Route path="/dashboard/reports" element={<DashboardPage />} />

        <Route
          path="/dashboard/administrators/register"
          element={<CreateAdministratorRegisterPage />}
        />

        <Route
          path="/dashboard/collaborators/register"
          element={<CreateCollaboratorRegisterPage />}
        />
      </Route>
    </Route>,
  ];
}
