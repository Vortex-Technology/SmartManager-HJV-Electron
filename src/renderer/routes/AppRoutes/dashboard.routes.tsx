import { DashboardLayout } from '@layouts/DashboardLayout';
import { ProtectedRoutes } from '@layouts/ProtectedRoutes';
import { CreateAdministratorRegisterPage } from '@pages/Administrator/CreateAdministratorRegister';
import { CreateCollaboratorRegisterPage } from '@pages/Collaborator/CreateCollaboratorRegister';
import { DashboardPage } from '@pages/Dashboard';
import { DeleteCollaboratorPage } from '@pages/Collaborator/DeleteCollaborator';
import { Route } from 'react-router-dom';
import { ListCollaboratorsPage } from '@pages/Collaborator/ListCollaborators';

export function DashboardRoutes() {
  return [
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/dashboard/products" element={<DashboardPage />} />

        <Route path="/dashboard/sales" element={<DashboardPage />} />

        <Route
          path="/dashboard/collaborators"
          element={<ListCollaboratorsPage />}
        />

        <Route path="/dashboard/reports" element={<DashboardPage />} />

        <Route
          path="/dashboard/administrators/register"
          element={<CreateAdministratorRegisterPage />}
        />

        <Route
          path="/dashboard/collaborators/register"
          element={<CreateCollaboratorRegisterPage />}
        />

        <Route
          path="/dashboard/collaborators/delete/:id"
          element={<DeleteCollaboratorPage />}
        />
      </Route>
    </Route>,
  ];
}
