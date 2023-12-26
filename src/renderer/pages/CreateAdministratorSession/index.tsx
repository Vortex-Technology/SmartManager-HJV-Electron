import { useRoutes } from '@hooks/useRoutes';
import { CreateSessionForm } from './components/CreateSessionForm';

export function CreateAdministratorSessionPage() {
  const { navigate } = useRoutes();
  return (
    <div>
      <CreateSessionForm />
      <br />
      <br />
      <br />

      <button type="button" onClick={() => navigate(`/`)}>
        Voltar para home
      </button>
    </div>
  );
}
