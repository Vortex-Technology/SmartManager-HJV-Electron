import { useAdministratorStore } from '@store/useAdministratorStore';
import { CreateRegisterFormData } from '@schemas/createRegisterFormSchema';

export function useCreateAdministratorRegister() {
  const { register } = useAdministratorStore((state) => ({
    register: state.register,
  }));

  const handlerRegister = async (
    createRegisterFormData: CreateRegisterFormData,
  ) => {
    return await register(createRegisterFormData);
  };

  return { handlerRegister };
}
