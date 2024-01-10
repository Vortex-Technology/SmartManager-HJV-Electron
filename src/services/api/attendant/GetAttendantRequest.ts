import { connection } from '@services/axios-config';
import { Administrator } from '@entities/Administrator';

export async function getAttendantRequest() {
  const response = await connection.get<{ administrator: Administrator }>(
    '/attendants',
  );

  return response;
}
