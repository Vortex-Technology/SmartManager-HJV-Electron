import { Administrator, AdministratorRole } from '@entities/Administrator';
import { Collaborator, CollaboratorType } from '@entities/Collaborator';
import { useAdministratorStore } from '@store/useAdministratorStore';
import { useAttendantStore } from '@store/useAttendantStore';
import { useSellerStore } from '@store/useSellerStore';

export function useAuthenticatedCollaborator() {
  const { admisnistratorIsAuthenticated, administartorLogged } =
    useAdministratorStore((state) => ({
      admisnistratorIsAuthenticated: state.isAuthenticated,
      administartorLogged: state.administratorLogged,
    }));

  const { sellerIsAuthenticated, sellerLogged } = useSellerStore((state) => ({
    sellerIsAuthenticated: state.isAuthenticated,
    sellerLogged: state.sellerLogged,
  }));

  const { attendantIsAutenticated, attendantLogged } = useAttendantStore(
    (state) => ({
      attendantIsAutenticated: state.isAuthenticated,
      attendantLogged: state.attendantLogged,
    }),
  );

  const isAuthenticated =
    admisnistratorIsAuthenticated ||
    sellerIsAuthenticated ||
    attendantIsAutenticated;

  function settupCollaboratorLogged(
    collaborator: Collaborator | Administrator | null,
  ): (Collaborator & { role: AdministratorRole }) | Administrator | null {
    if (!collaborator) return null;

    if ((collaborator as Administrator).role) {
      return collaborator as Administrator;
    }

    return {
      ...collaborator,
      role: 'VIEWER' as AdministratorRole,
    };
  }

  const verificationsObjects = [
    administartorLogged,
    sellerLogged,
    attendantLogged,
  ];

  const validIndexObject = verificationsObjects.findIndex(
    (item) => item !== null,
  );

  const collaboratorLogged = settupCollaboratorLogged(
    verificationsObjects[validIndexObject],
  );

  const collaboratorTypeMapper = {
    0: 'ADMINISTRATOR',
    1: 'SELLER',
    2: 'ATTENDANT',
  } as { [key: number]: CollaboratorType };

  const collaboratorType: CollaboratorType | null =
    collaboratorTypeMapper[validIndexObject];

  return { isAuthenticated, collaboratorLogged, collaboratorType };
}
