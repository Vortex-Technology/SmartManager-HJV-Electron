import { useEffect } from 'react';
import { socket } from '@services/socket/socketConfig';
import { useAdministrator } from './useAdministrator';
import { useAuthenticatedCollaborator } from './useAuthenticatedCollaborator';

export function usePreload() {
  const { preloadAdministrator, isLoadingAdministrator } = useAdministrator();
  const isLoading = isLoadingAdministrator;

  useAuthenticatedCollaborator();

  useEffect(() => {
    preloadAdministrator();
    socket.connect();
  }, [preloadAdministrator]);

  return { isLoading };
}
