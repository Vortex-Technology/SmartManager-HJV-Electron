import { Page404 } from '@components/404';
import { useAuthenticatedCollaborator } from '@hooks/useAuthenticatedCollaborator';

export function DashboardPage() {
  const { collaboratorLogged } = useAuthenticatedCollaborator();

  if (!collaboratorLogged) return <Page404 />;

  return (
    <div className="w-full h-full bg-neutral-100">
      <div>
        <p>Perfil</p>
        <div>ID: {collaboratorLogged.id}</div>
        <div>Name: {collaboratorLogged.name}</div>
        <div>Role: {collaboratorLogged.role}</div>
        <div>Image: {collaboratorLogged.image.alt}</div>
      </div>
    </div>
  );
}
