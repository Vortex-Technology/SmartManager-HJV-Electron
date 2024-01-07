import { connection } from '@services/axios-config';
import { Administrator } from '@entities/Administrator';

export async function getAttendantRequest() {
  const response = await connection.get<{ administrator: Administrator }>(
    // imagino que seja algo assim depois alterar se necessario
    '/administrator/attendant',
  );

  return response;
}
