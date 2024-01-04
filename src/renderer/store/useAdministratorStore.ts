// useLoginStore.ts
import { Administrator } from '@entities/Administrator';
import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { CreateRegisterFormData } from '@schemas/createRegisterFormSchema';
import { create } from 'zustand';
import { createAdministrator } from '@services/api/administrator/CreateAdministrator';
import { loginAdministrator } from '@services/api/administrator/LoginAdministrator';
import { statusCode } from '@services/api/responses/statusCode';
import { connection } from '@services/axios-config';
import { localStorageFunctions } from '@services/localStorage/localStorageFunctions';
import { localStorageKeys } from '@config/localStorageKeys';

interface UseAdministratorStore {
  isAuthenticated: boolean;
  isLoading: boolean;
  administrators: Administrator[];

  error: string | null;

  login: (createSessionFormData: CreateSessionFormData) => Promise<boolean>;
  register: (
    createRegisterFormData: CreateRegisterFormData,
  ) => Promise<boolean>;
  preload: () => void;
}

const useAdministratorStore = create<UseAdministratorStore>((set) => {
  return {
    isAuthenticated: true,
    isLoading: true,
    administrators: [],
    error: null,

    preload: () => {
      set({ isLoading: true });
      const accessToken = localStorageFunctions.get<string>(
        localStorageKeys.accessToken,
      );

      if (accessToken) connection.setDefaultBearerToken(accessToken);
      set({ isLoading: false });
    },

    login: async (createSessionFormData) => {
      const statusCodeOfErrors = [
        statusCode.BadRequest,
        statusCode.Forbidden,
        undefined,
      ];

      const response = await loginAdministrator(createSessionFormData);
      console.log(response);
      if (statusCodeOfErrors.includes(response.status)) {
        set({
          isAuthenticated: false,
          error: response.message,
        });

        return false;
      }

      connection.setDefaultBearerToken(response.data!.accessToken);

      localStorageFunctions.set(
        localStorageKeys.accessToken,
        response.data!.accessToken,
      );

      localStorageFunctions.set(
        localStorageKeys.refreshToken,
        response.data!.refreshToken,
      );

      set({
        isAuthenticated: true,
      });
      return true;
    },

    register: async (createRegisterFormData) => {
      const statusCodeOfErrors = [
        statusCode.BadRequest,
        statusCode.Forbidden,
        statusCode.Unauthorized,
        undefined,
      ];

      const response = await createAdministrator(createRegisterFormData);

      if (statusCodeOfErrors.includes(response.status)) {
        set({
          isAuthenticated: false,
          error: response.message,
        });

        return false;
      }

      return true;
    },
  };
});

export { useAdministratorStore };
