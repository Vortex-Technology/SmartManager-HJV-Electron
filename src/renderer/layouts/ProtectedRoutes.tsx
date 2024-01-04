import { Navigate, Outlet } from 'react-router-dom';

function authendicated() {
  const authorized = true;

  if (authorized) {
    return authorized;
  }

  return false;
}

export function ProtectedRoutes() {
  const auth = authendicated();

  return auth ? <Outlet /> : <Navigate to="/" />;
}
