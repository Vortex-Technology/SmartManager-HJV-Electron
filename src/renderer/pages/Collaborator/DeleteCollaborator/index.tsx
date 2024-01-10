import { Page404 } from '@components/404';
import { Button } from '@components/Button';
import { useRoutes } from '@hooks/useRoutes';
import { useDeleteCollaborator } from '@hooks/useDeleteCollaborator';
import { useAuthenticatedCollaborator } from '@hooks/useAuthenticatedCollaborator';
import { Collaborator } from '@entities/Collaborator';
import { getCollaborators } from '../../../../listCollaboratorsFake/mockCollaboratorsFake';

export function DeleteCollaboratorPage() {
  const { handleDeleteAdministrator } = useDeleteCollaborator();

  const { isAuthenticated, collaboratorType } = useAuthenticatedCollaborator();
  const { params } = useRoutes();
  const { id } = params;

  if (!isAuthenticated || collaboratorType !== 'ADMINISTRATOR' || !id) {
    return <Page404 />;
  }

  const allCollaborators: Collaborator[] = getCollaborators();

  if (!allCollaborators) {
    return <Page404 />;
  }

  return (
    <div className="flex  flex-wrap gap-5">
      <span>Excluir um Administrator</span>
      <div className="flex flex-wrap gap-5">
        {allCollaborators.map((collaborator) => (
          <div
            key={collaborator.id}
            className="border-spacing-1 p-8 w-48 box-border"
            role="button"
            tabIndex={0}
            onClick={() => handleDeleteAdministrator(collaborator.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleDeleteAdministrator(collaborator.id);
              }
            }}
          >
            <div>ID: {collaborator.id}</div>
            <div>Nome: {collaborator.name}</div>
            <div>Alt da imagem: {collaborator.image.alt}</div>
            <div>URL da imagem: {collaborator.image.url}</div>
          </div>
        ))}
      </div>

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
