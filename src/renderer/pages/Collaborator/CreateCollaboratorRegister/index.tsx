import { useRoutes } from '@hooks/useRoutes';
import { CreateRegisterForm } from './components/CreateRegisterForm';

export function CreateCollaboratorRegisterPage() {
  const { navigate } = useRoutes();

  return (
    <div>
      <CreateRegisterForm />
      <br />
      <br />
      <br />

      <button type="button" onClick={() => navigate(`/`)}>
        Voltar para home
      </button>
    </div>
  );
}