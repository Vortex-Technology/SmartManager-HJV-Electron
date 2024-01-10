import { Page404 } from '@components/404';
import { Button } from '@components/Button';
import { useRoutes } from '@hooks/useRoutes';
import { useDeleteCollaborator } from '@hooks/useDeleteCollaborator';
import { useAuthenticatedCollaborator } from '@hooks/useAuthenticatedCollaborator';

export function DeleteCollaboratorPage() {
  const { handleDeleteAdministrator } = useDeleteCollaborator();

  const { isAuthenticated, collaboratorType } = useAuthenticatedCollaborator();
  const { params } = useRoutes();
  const { id } = params;

  if (!isAuthenticated || collaboratorType !== 'ADMINISTRATOR' || !id) {
    return <Page404 />;
  }

  return (
    <div>
      <span>Excluir um Administrator</span>

      <div>você realmente deseja excluir esse funcionário?</div>

      <Button.Root onClick={() => handleDeleteAdministrator(id)}>
        <Button.Text>Confirmar</Button.Text>
      </Button.Root>

      <Button.Root>
        <Button.Text>Cancelar</Button.Text>
      </Button.Root>
    </div>
  );
}
