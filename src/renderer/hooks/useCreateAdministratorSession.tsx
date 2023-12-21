import { CreateSessionData } from '@@types/CreateSessionData';
import { useAdministratorStore } from '@store/useAdminitratorStore';

export function useCreateAdministratorSession() {
  const { login, isAuthenticated } = useAdministratorStore();

  const handleLogin = async (createSessionData: CreateSessionData) => {
    await login(createSessionData);
  };

  return { handleLogin, isAuthenticated };
}
