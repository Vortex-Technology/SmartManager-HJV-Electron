import { connection } from '@services/axios-config';
import { CreateRegisterFormData } from '@schemas/createRegisterFormSchema';

export async function createAdministrator(data: CreateRegisterFormData) {
  const response = await connection.post('/administrators', data);

  return response;
}
