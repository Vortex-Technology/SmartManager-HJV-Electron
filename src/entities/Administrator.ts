export interface Administrator {
  id: string;
  name: string;
  image: {
    url: string | null;
    alt: string;
  };
  role: 'MASTER' | 'FULL_ACCESS' | 'VIEWER';
}
