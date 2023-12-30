import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { useAdministratorStore } from '@store/useAdministratorStore';

export function useCreateAdministratorSession() {
  const { login } = useAdministratorStore((state) => ({
    login: state.login,
  }));

  const handleLogin = async (createSessionFormData: CreateSessionFormData) => {
    return login(createSessionFormData);
  };

  return { handleLogin };
}
