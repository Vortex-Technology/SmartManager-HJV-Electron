import { useAdministratorStore } from '@store/useAdministratorStore';
import { CreateRegisterFormData } from '@schemas/createRegisterFormSchema';

export function useCreateAdministratorRegister() {
  const { register } = useAdministratorStore();

  const handleRegisterAdministrator = async (
    createRegisterFormData: CreateRegisterFormData,
  ) => {
    await register(createRegisterFormData);
  };

  return { handleRegisterAdministrator };
}
