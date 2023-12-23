import { CreateRegisterFormData } from '@schemas/createRegisterFormSchema';
import { useViewerStore } from '@store/useViewerStore';

export function useCreateViewerRegister() {
  const { register } = useViewerStore();

  const handleRegisterViewer = async (
    createRegisterFormData: CreateRegisterFormData,
  ) => {
    await register(createRegisterFormData);
  };

  return { handleRegisterViewer };
}
