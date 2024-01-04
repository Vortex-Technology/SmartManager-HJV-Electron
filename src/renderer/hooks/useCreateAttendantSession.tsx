import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { useAttendantStore } from '@store/useAttendantStore';

export function useCreateAttendantSession() {
  const { login } = useAttendantStore((state) => ({
    login: state.login,
  }));

  const handleLogin = async (
    createSessionFormSchema: CreateSessionFormData,
  ) => {
    return await login(createSessionFormSchema);
  };

  return { handleLogin };
}
