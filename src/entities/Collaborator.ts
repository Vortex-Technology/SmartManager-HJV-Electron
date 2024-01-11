export type CollaboratorType = 'ADMINISTRATOR' | 'SELLER' | 'ATTENDANT';

export interface Collaborator {
  id: string;
  name: string;
  image: {
    url: string | null;
    alt: string;
  };
}
