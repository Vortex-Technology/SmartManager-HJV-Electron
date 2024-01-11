export type CollaboratorType = 'ADMINISTRATOR' | 'SELLER' | 'ATTENDANT';

export interface Collaborator {
  id: string;
  name: string;
  image: {
    url: string | null;
    alt: string;
  };
  type: CollaboratorType;
}

const collaboratorsFake: Collaborator[] = [
  {
    id: '1',
    name: 'John Doe',
    image: {
      url: 'https://example.com/john-doe.jpg',
      alt: 'John Doe Image',
    },
    type: 'ADMINISTRATOR',
  },
  {
    id: '2',
    name: 'Jane Smith',
    image: {
      url: 'https://example.com/jane-smith.jpg',
      alt: 'Jane Smith Image',
    },
    type: 'SELLER',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    image: {
      url: 'https://example.com/bob-johnson.jpg',
      alt: 'Bob Johnson Image',
    },
    type: 'ATTENDANT',
  },
  {
    id: '4',
    name: 'Alice Brown',
    image: {
      url: 'https://example.com/alice-brown.jpg',
      alt: 'Alice Brown Image',
    },
    type: 'ADMINISTRATOR',
  },
  {
    id: '5',
    name: 'Charlie Davis',
    image: {
      url: 'https://example.com/charlie-davis.jpg',
      alt: 'Charlie Davis Image',
    },
    type: 'SELLER',
  },
  {
    id: '6',
    name: 'Eva White',
    image: {
      url: 'https://example.com/eva-white.jpg',
      alt: 'Eva White Image',
    },
    type: 'ATTENDANT',
  },
];

export function getCollaborators(): Collaborator[] {
  return collaboratorsFake;
}
export default collaboratorsFake;
