import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@pages/Home';
import { usePreload } from '@hooks/usePreload';
import { CreateAdministratorSessionPage } from '@pages/CreateAdministratorSession';
import { CreateAttendantSessionPage } from '@pages/CreateAttendantSession';
import { CreateSellerSessionPage } from '@pages/CreateSellerSession';
import { CreateAdministratorRegisterPage } from '@pages/CreateAdministratorRegister';
import { CreateCollaboratorRegisterPage } from '@pages/CreateCollaboratorRegister';

export function AppRoutes() {
  const { isLoading } = usePreload();

  if (isLoading) {
    return <div>CARREGANDO...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/register/administrator"
          element={<CreateAdministratorRegisterPage />}
        />

        <Route
          path="/administrator/login"
          element={<CreateAdministratorSessionPage />}
        />

        <Route
          path="/register/employee"
          element={<CreateCollaboratorRegisterPage />}
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
