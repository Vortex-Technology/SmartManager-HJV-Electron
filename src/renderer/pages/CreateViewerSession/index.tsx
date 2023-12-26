import { useRoutes } from '@hooks/useRoutes';
import { CreateSessionForm } from './components/CreateSessionForm';

export function CreateViewerSessionPage() {
  const { navigate } = useRoutes();
  return (
    <div className="h-full bg-teal-200  w-full">
      <div>
        <CreateSessionForm />
      </div>

      <br />

      <button type="button" onClick={() => navigate(`/`)}>
        Voltar para home
      </button>
    </div>
  );
}
