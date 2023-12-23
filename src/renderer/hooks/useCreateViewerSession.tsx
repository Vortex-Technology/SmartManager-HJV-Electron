import { useViewerStore } from '@store/useViewerStore';
import { CreateSessionFormData } from '@schemas/createSessionFormSchema';

export function useCreateViewerSession() {
  const { login, isAuthenticated } = useViewerStore();

  const handleLogin = async (createSessionFormData: CreateSessionFormData) => {
    await login(createSessionFormData);
  };

  return { handleLogin, isAuthenticated };
}
