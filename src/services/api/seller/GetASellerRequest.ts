import { connection } from '@services/axios-config';
import { Administrator } from '@entities/Administrator';

export async function getSellerRequest() {
  const response = await connection.get<{ administrator: Administrator }>(
    '/sellers',
  );

  return response;
}
