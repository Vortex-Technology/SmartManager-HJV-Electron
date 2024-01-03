import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { connection } from '@services/axios-config';

interface LoginSellerResponse {
  accessToken: string;
  refreshToken: string;
}

export async function loginSeller(data: CreateSessionFormData) {
  const { login, password } = data;

  const response = await connection.post<LoginSellerResponse>('/seller/login', {
    login,
    password,
  });

  return response;
}
