import { useEffect } from 'react';
import { useAdministrator } from './useAdministrator';
import { socket } from '../services/socket/socketConfig';

export function usePreload() {
  const { preloadAdministrator, isLoadingAdministrator } = useAdministrator();
  const isLoading = isLoadingAdministrator;

  useEffect(() => {
    preloadAdministrator();
    socket.connect();
  }, [preloadAdministrator]);

  return { isLoading };
}
