import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@pages/Home';
import { usePreload } from '@hooks/usePreload';
import { CreateAdministratorSessionPage } from '@pages/CreateAdministratorSession';
import { CreateAttendantSessionPage } from '@pages/CreateAttendantSession';
import { CreateSellerSessionPage } from '@pages/CreateSellerSession';
import { CreateAdministratorRegisterPage } from '@pages/CreateAdministratorRegister';
import { CreateCollaboratorRegisterPage } from '@pages/CreateCollaboratorRegister';
import { ProtectedRoutes } from '@layouts/ProtectedRoutes';
import { DashboardPage } from '@pages/Dashboard';

export function AppRoutes() {
  const { isLoading } = usePreload();

  if (isLoading) {
    return <div>CARREGANDO...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/administrator" element={<ProtectedRoutes />}>
          <Route
            path="/administrator/register"
            element={<CreateAdministratorRegisterPage />}
          />
          <Route
            path="/administrator/collaborator/register"
            element={<CreateCollaboratorRegisterPage />}
          />

          <Route path="/administrator/interface" element={<DashboardPage />} />
        </Route>

        <Route
          path="/administrator/login"
          element={<CreateAdministratorSessionPage />}
        />

        <Route path="/seller/login" element={<CreateSellerSessionPage />} />

        <Route
          path="/attendant/login"
          element={<CreateAttendantSessionPage />}
        />
      </Routes>
    </Router>
  );
}
