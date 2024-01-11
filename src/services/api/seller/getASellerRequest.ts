import { Administrator } from '@entities/Administrator';
import { connection } from '@services/axiosConfig';

export async function getSellerRequest() {
  const response = await connection.get<{ administrator: Administrator }>(
    '/sellers',
  );

  return response;
}
