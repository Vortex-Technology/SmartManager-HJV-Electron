import { useAdministratorStore } from '@store/useAdminitratorStore';
import { CreateRegisterFormData } from '@schemas/createRegisterFormSchema';

export function useCreateAdministratorRegister() {
  const { register } = useAdministratorStore();

  const hanleRegisterAdministrator = async (
    createRegisterFormData: CreateRegisterFormData,
  ) => {
    await register(createRegisterFormData);
  };

  return { hanleRegisterAdministrator };
}
