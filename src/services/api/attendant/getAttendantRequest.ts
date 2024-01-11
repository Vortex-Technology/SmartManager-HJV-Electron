import { Administrator } from '@entities/Administrator';
import { connection } from '@services/axiosConfig';

export async function getAttendantRequest() {
  const response = await connection.get<{ administrator: Administrator }>(
    '/attendants',
  );

  return response;
}
