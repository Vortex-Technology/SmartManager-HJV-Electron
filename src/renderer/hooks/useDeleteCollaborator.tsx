import { useAdministratorStore } from '@store/useAdministratorStore';

export function useDeleteCollaborator() {
  const { deleteAdministrator } = useAdministratorStore((state) => ({
    deleteAdministrator: state.deleteAdministrator,
  }));
  const handleDeleteAdministrator = async (id: string) => {
    return await deleteAdministrator(id);
  };

  return { handleDeleteAdministrator };
}
