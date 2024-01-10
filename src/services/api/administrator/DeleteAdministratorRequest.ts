import { connection } from '@services/axios-config';

export async function deleteAdministratorRequest(id: string) {
  const response = await connection.delete(`/administrator/${id}`);

  return response;
}
