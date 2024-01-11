import { Administrator } from '@entities/Administrator';
import { connection } from '@services/axiosConfig';

export async function getAdministratorRequest() {
  const response = await connection.get<{ administrator: Administrator }>(
    '/administrators',
  );

  return response;
}
