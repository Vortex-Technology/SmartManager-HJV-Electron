import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { useAdministratorStore } from '@store/useAdminitratorStore';

export function useCreateAdministratorSession() {
  const { login, isAuthenticated } = useAdministratorStore();

  const handleLogin = async (createSessionFormData: CreateSessionFormData) => {
    await login(createSessionFormData);
  };

  return { handleLogin, isAuthenticated };
}
