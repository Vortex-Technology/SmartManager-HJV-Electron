import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

export function useRoutes() {
  const navigate = useNavigate();
  const params = useParams();
  const { pathname } = useLocation();

  return {
    navigate,
    params,
    Outlet,
    Navigate,
    Link,
    pathname,
  };
}
