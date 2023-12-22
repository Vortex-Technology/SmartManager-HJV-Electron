import { useViewerStore } from '@store/useViewerStore';
import { CreateSessionData } from '@@types/CreateSessionData';

export function useCreateViewerSession() {
  const { login, isAuthenticated } = useViewerStore();

  const handleLogin = async (createSessionData: CreateSessionData) => {
    await login(createSessionData);
  };

  return { handleLogin, isAuthenticated };
}
