import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { connection } from '@services/axios-config';

interface LoginAttendantResponse {
  accessToken: string;
  refreshToken: string;
}

export async function loginAttendant(data: CreateSessionFormData) {
  const { login, password } = data;

  const response = await connection.post<LoginAttendantResponse>(
    '/attendants/login',
    {
      login,
      password,
    },
  );

  return response;
}
