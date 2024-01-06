import { useAuthenticatedCollaborator } from '@hooks/useAuthenticatedCollaborator';

export function DashboardPage() {
  const { collaboratorLogged } = useAuthenticatedCollaborator();

  if (!collaboratorLogged) return null;

  return (
    <div>
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
