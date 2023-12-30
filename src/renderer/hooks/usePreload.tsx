import { useEffect } from 'react';
import { socket } from '@services/socket/socketConfig';
import { useAdministrator } from './useAdministrator';

export function usePreload() {
  const { preloadAdministrator, isLoadingAdministrator } = useAdministrator();
  const isLoading = isLoadingAdministrator;

  useEffect(() => {
    preloadAdministrator();
    socket.connect();
  }, [preloadAdministrator]);

  return { isLoading };
}
