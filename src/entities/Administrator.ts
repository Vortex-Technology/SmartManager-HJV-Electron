export type AdministratorRole = 'MASTER' | 'FULL_ACCESS' | 'VIEWER' | 'EDITOR';

export interface Administrator {
  id: string;
  name: string;
  image: {
    url: string | null;
    alt: string;
  };
  role: AdministratorRole;
}
