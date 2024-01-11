import { CreateRegisterFormData } from '@schemas/createRegisterFormSchema';
import { connection } from '@services/axiosConfig';

export async function createAdministrator(data: CreateRegisterFormData) {
  const response = await connection.post('/administrators', data);

  return response;
}
