import { useState } from 'react';
import { Collaborator, CollaboratorType } from '@entities/Collaborator';
import { getCollaborators } from '../../../../listCollaboratorsFake/mockCollaboratorsFake';

export function ListCollaboratorsPage() {
  // const collaborators: Collaborator[] = [];

  const allCollaborators: Collaborator[] = getCollaborators();
  const [selectedType, setSelectedType] = useState<CollaboratorType | null>(
    null,
  );

  const uniqueTypes: CollaboratorType[] = Array.from(
    new Set(allCollaborators.map((c) => c.type)),
  );

  const handleTypeClick = (type: CollaboratorType) => {
    setSelectedType(type);
  };

  return (
    <div>
      <h1 className="text-center my-10">
        Selecione um dos cargos para listar os colaboradores
      </h1>
      <div className="flex justify-between  items-center p-8 my-2">
        {uniqueTypes.map((type) => (
          <span
            key={type}
            role="button"
            tabIndex={0}
            onClick={() => handleTypeClick(type)}
            onKeyDown={(e) => e.key === 'Enter' && handleTypeClick(type)}
            className=" p-8 my-2"
          >
            {type}
          </span>
        ))}
      </div>

      <div className="flex ml-20 gap-14 my-20 m-5 justify-between items-center">
        {allCollaborators
          .filter((collaborator) => collaborator.type === selectedType)
          .map((collaborator) => (
            <div key={collaborator.id}>
              <span>{collaborator.id}</span>
              <span>{collaborator.name}</span>
              <span>{collaborator.image.alt}</span>
              <span>{collaborator.image.url}</span>
              <span>{collaborator.type}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
