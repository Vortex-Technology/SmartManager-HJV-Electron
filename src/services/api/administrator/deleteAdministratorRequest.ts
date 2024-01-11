import { connection } from '@services/axiosConfig';

export async function deleteAdministratorRequest(id: string) {
  const response = await connection.delete(`/administrators/${id}`);

  return response;
}
