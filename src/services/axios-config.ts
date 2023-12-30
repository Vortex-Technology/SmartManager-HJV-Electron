import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Response } from './api/responses/response';

const apiConfig: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: true,
});

apiConfig.interceptors.response.use(
  (res) => ({ ...res }),
  (error) => {
    if (error.response && error.response.data) {
      return Promise.resolve(error.response.data);
    }

    const err = {
      message: 'Não foi possível se conectar com o servidor!',
    };
    return Promise.resolve(err);
  },
);

const connection = {
  setDefaultBearerToken: (token: string) => {
    apiConfig.defaults.headers.Authorization = `Bearer ${token}`;
  },

  get: <T>(url: string, config?: AxiosRequestConfig) =>
    apiConfig.get<any, Response<T>>(url, config),

  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    apiConfig.post<any, Response<T>>(url, data, config),

  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    apiConfig.put<any, Response<T>>(url, data, config),

  patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    apiConfig.patch<any, Response<T>>(url, data, config),

  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    apiConfig.delete<any, Response<T>>(url, config),
};

export { apiConfig, connection };
