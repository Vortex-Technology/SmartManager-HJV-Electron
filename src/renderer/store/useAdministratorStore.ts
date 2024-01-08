import { Administrator } from '@entities/Administrator';
import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { CreateRegisterFormData } from '@schemas/createRegisterFormSchema';
import { create } from 'zustand';
import { createAdministrator } from '@services/api/administrator/createAdministratorRequest';
import { loginAdministrator } from '@services/api/administrator/loginAdministratorRequest';
import { statusCode } from '@services/api/responses/statusCode';
import { connection } from '@services/axios-config';
import { localStorageFunctions } from '@services/localStorage/localStorageFunctions';
import { localStorageKeys } from '@config/localStorageKeys';
import { getAdministratorRequest } from '@services/api/administrator/getAdministratorRequest';
import { deleteAdministratorRequest } from '@services/api/administrator/deleteAdministratorRequest';

interface UseAdministratorStore {
  isAuthenticated: boolean;
  isLoading: boolean;
  administrators: Administrator[];
  administratorLogged: Administrator | null;

  error: string | null;

  login: (createSessionFormData: CreateSessionFormData) => Promise<boolean>;
  register: (
    createRegisterFormData: CreateRegisterFormData,
  ) => Promise<boolean>;
  preload: () => Promise<void>;
  getAdministrator: () => Promise<boolean>;
  deleteAdministrator: (id: string) => void;
}

const useAdministratorStore = create<UseAdministratorStore>((set, get) => {
  return {
    isAuthenticated: false,
    isLoading: true,
    administrators: [],
    error: null,
    administratorLogged: null,

    preload: async () => {
      set({ isLoading: true });

      const accessToken = localStorageFunctions.get<string>(
        localStorageKeys.accessToken,
      );

      if (accessToken) connection.setDefaultBearerToken(accessToken);

      const { getAdministrator } = get();
      await getAdministrator();
    },

    login: async (createSessionFormData) => {
      set({ isLoading: true });
      const statusCodeOfErrors = [
        statusCode.BadRequest,
        statusCode.Forbidden,
        undefined,
      ];

      const response = await loginAdministrator(createSessionFormData);

      if (statusCodeOfErrors.includes(response.status)) {
        set({
          isLoading: false,
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
      const { getAdministrator } = get();
      await getAdministrator();

      return true;
    },

    register: async (createRegisterFormData) => {
      set({ isLoading: true });

      const statusCodeOfErrors = [
        statusCode.BadRequest,
        statusCode.Forbidden,
        statusCode.Unauthorized,
        undefined,
      ];

      const response = await createAdministrator(createRegisterFormData);

      if (statusCodeOfErrors.includes(response.status)) {
        set({
          isLoading: false,
          isAuthenticated: false,
          error: response.message,
        });

        return false;
      }
      set({ isLoading: false });
      return true;
    },

    getAdministrator: async () => {
      const statusCodeOfErrors = [
        statusCode.BadRequest,
        statusCode.Forbidden,
        statusCode.Unauthorized,
        undefined,
      ];
      const response = await getAdministratorRequest();

      if (statusCodeOfErrors.includes(response.status)) {
        set({ isLoading: false, error: response.message });
        return false;
      }

      set({
        administratorLogged: response.data?.administrator,
        isLoading: false,
        isAuthenticated: true,
      });

      return true;
    },

    deleteAdministrator: async (id) => {
      const statusCodeOfErrors = [
        statusCode.BadRequest,
        statusCode.Forbidden,
        statusCode.NotFound,
        statusCode.Conflict,
        undefined,
      ];

      const response = await deleteAdministratorRequest(id);

      if (statusCodeOfErrors.includes(response.status)) {
        set({ isLoading: false, error: response.message });

        return false;
      }

      set({
        isLoading: false,
        isAuthenticated: true,
      });

      return true;
    },
  };
});

export { useAdministratorStore };
