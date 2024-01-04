import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';

export function useRoutes() {
  const navigate = useNavigate();
  const params = useParams();

  return {
    navigate,
    params,
    Outlet,
    Navigate,
  };
}
