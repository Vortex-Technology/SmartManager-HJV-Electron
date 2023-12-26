import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { useAdministratorStore } from '@store/useAdministratorStore';

export function useCreateAdministratorSession() {
  const { login, isAuthenticated } = useAdministratorStore((state) => ({
    login: state.login,
    isAuthenticated: state.isAuthenticated,
  }));

  const handleLogin = async (createSessionFormData: CreateSessionFormData) => {
    await login(createSessionFormData);
  };

  return { handleLogin, isAuthenticated };
}
