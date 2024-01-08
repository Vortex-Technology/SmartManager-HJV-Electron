import { localStorageKeys } from '@config/localStorageKeys';
import { Collaborator } from '@entities/Collaborator';
import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { getAttendantRequest } from '@services/api/attendant/getAttendantRequest';
import { loginAttendant } from '@services/api/attendant/loginAttendantRequest';
import { statusCode } from '@services/api/responses/statusCode';
import { connection } from '@services/axios-config';
import { localStorageFunctions } from '@services/localStorage/localStorageFunctions';
import { create } from 'zustand';

interface UseAttendantStore {
  isAuthenticated: boolean;
  isLoading: boolean;
  attendantLogged: null | Collaborator;

  error: string | null;

  login: (createSessionFormData: CreateSessionFormData) => Promise<boolean>;
  preload: () => Promise<void>;
  getAttendant: () => Promise<boolean>;
}

const useAttendantStore = create<UseAttendantStore>((set, get) => {
  return {
    isAuthenticated: false,
    isLoading: true,
    error: null,
    attendantLogged: null,

    preload: async () => {
      set({ isLoading: true });

      const accessToken = localStorageFunctions.get<string>(
        localStorageKeys.accessToken,
      );

      if (accessToken) connection.setDefaultBearerToken(accessToken);
      set({ isLoading: false });

      const { getAttendant } = get();
      await getAttendant();
    },

    login: async (createSessionFormData) => {
      const statusCodeOfErrors = [
        statusCode.BadRequest,
        statusCode.Forbidden,
        undefined,
      ];

      const response = await loginAttendant(createSessionFormData);

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

      const { getAttendant } = get();
      await getAttendant();

      return true;
    },

    getAttendant: async () => {
      const statusCodeOfErrors = [
        statusCode.BadRequest,
        statusCode.Conflict,
        undefined,
      ];

      const response = await getAttendantRequest();

      if (statusCodeOfErrors.includes(response.status)) {
        set({ isLoading: false, error: response.message });
        return false;
      }

      set({
        attendantLogged: response.data?.administrator,
        isLoading: false,
        isAuthenticated: true,
      });

      return true;
    },
  };
});

export { useAttendantStore };
