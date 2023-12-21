import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@pages/Home';
import { usePreload } from '@hooks/usePreload';
import { CreateAdminSessionPage } from '@pages/CreateAdminSession';

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
          element={<CreateAdminSessionPage />}
        />
      </Routes>
    </Router>
  );
}
