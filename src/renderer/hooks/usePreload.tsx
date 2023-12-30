import { useEffect } from 'react';
import { useAdministrator } from './useAdministrator';

export function usePreload() {
  const { preloadAdministrator, isLoadingAdministrator } = useAdministrator();
  const isLoading = isLoadingAdministrator;

  useEffect(() => {
    preloadAdministrator();
  }, [preloadAdministrator]);

  return { isLoading };
}
