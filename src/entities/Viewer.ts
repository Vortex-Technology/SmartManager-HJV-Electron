export interface Viewer {
  id: string;
  name: string;
  image: {
    url: string | null;
    alt: string;
  };
  role: 'VIEWER';
}
