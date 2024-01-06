import { useEffect } from 'react';
import { socket } from '@services/socket/socketConfig';
import { useAdministrator } from './useAdministrator';
import { useAuthenticatedCollaborator } from './useAuthenticatedCollaborator';
import { useRoutes } from './useRoutes';

export function usePreload() {
  const { navigate } = useRoutes();
  const { preloadAdministrator, isLoadingAdministrator } = useAdministrator();
  const { isAuthenticated } = useAuthenticatedCollaborator();

  const isLoading = isLoadingAdministrator;

  useEffect(() => {
    preloadAdministrator();
    socket.connect();

    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [preloadAdministrator, isAuthenticated, navigate]);

  return { isLoading };
}
