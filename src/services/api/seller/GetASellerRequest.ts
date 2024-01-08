import { connection } from '@services/axios-config';
import { Administrator } from '@entities/Administrator';

export async function getSellerRequest() {
  const response = await connection.get<{ administrator: Administrator }>(
    // imagino que seja algo assim depois alterar se necessario
    '/administrator/seller',
  );

  return response;
}
