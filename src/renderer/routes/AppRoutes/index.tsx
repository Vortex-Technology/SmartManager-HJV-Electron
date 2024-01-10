import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@pages/Home';
import { CreateAdministratorSessionPage } from '@pages/Administrator/CreateAdministratorSession';
import { CreateAttendantSessionPage } from '@pages/Attendant/CreateAttendantSession';
import { CreateSellerSessionPage } from '@pages/Seller/CreateSellerSession';
import { DashboardRoutes } from './dashboard.routes';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {...DashboardRoutes()}

        <Route
          path="/login/administrator"
          element={<CreateAdministratorSessionPage />}
        />

        <Route path="/login/seller" element={<CreateSellerSessionPage />} />

        <Route
          path="/login/attendant"
          element={<CreateAttendantSessionPage />}
        />
      </Routes>
    </Router>
  );
}
