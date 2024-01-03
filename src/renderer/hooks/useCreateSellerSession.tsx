import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { useSellerStore } from '@store/useSellerStore';

export function useCreateSellerSession() {
  const { login } = useSellerStore((state) => ({
    login: state.login,
  }));

  const handleLogin = async (
    createSessionFormSchema: CreateSessionFormData,
  ) => {
    return await login(createSessionFormSchema);
  };

  return { handleLogin };
}
