import { connection } from '@services/axios-config';
import { Administrator } from '@entities/Administrator';

export async function getAdministratorRequest() {
  const response = await connection.get<{ administrator: Administrator }>(
    '/administrators',
  );

  return response;
}
