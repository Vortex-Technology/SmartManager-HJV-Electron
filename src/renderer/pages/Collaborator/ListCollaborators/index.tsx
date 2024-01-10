import { Collaborator } from '@entities/Collaborator';

export function ListCollaboratorsPage() {
  const collaborators: Collaborator[] = [];

  return (
    <div>
      {collaborators.map((collaborator) => (
        <div>
          <span>{collaborator.id}</span>
          <span>{collaborator.name}</span>
          <span>{collaborator.image.alt}</span>
          <span>{collaborator.image.url}</span>
        </div>
      ))}
      ;
    </div>
  );
}
