import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { connection } from '@services/axios-config';

interface LoginAdministratorResponse {
  accessToken: string;
  refreshToken: string;
}

export async function loginAdministrator(data: CreateSessionFormData) {
  const { login, password } = data;

  const response = await connection.post<LoginAdministratorResponse>(
    '/administrators/login',
    {
      login,
      password,
    },
  );

  return response;
}