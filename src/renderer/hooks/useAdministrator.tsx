import { useAdministratorStore } from '@store/useAdministratorStore';

export function useAdministrator() {
  const { preloadAdministrator, isLoadingAdministrator, isAuthenticated } =
    useAdministratorStore((state) => ({
      preloadAdministrator: state.preload,
      isLoadingAdministrator: state.isLoading,
      isAuthenticated: state.isAuthenticated,
    }));

  return { preloadAdministrator, isLoadingAdministrator, isAuthenticated };
}
