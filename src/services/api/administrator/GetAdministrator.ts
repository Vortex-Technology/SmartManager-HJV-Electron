import { connection } from '@services/axios-config';

export async function getAdministrator() {
  const response = await connection.get('/administrator');

  return response;
}
