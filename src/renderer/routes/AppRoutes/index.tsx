import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@pages/Home';
import { usePreload } from '@hooks/usePreload';
import { CreateAdministratorSessionPage } from '@pages/CreateAdministratorSession';
import { CreateViewerSessionPage } from '@pages/CreateViewerSession';
import { CreateAdministratorRegisterPage } from '@pages/CreateAdministratorRegister';
import { CreateEmployeeRegisterPage } from '@pages/CreateEmployeRegister';

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
          path="/administrator/login"
          element={<CreateAdministratorSessionPage />}
        />

        <Route path="/viewer/login" element={<CreateViewerSessionPage />} />

        <Route
          path="/register/administrator"
          element={<CreateAdministratorRegisterPage />}
        />

        <Route
          path="/register/employee"
          element={<CreateEmployeeRegisterPage />}
        />
      </Routes>
    </Router>
  );
}
