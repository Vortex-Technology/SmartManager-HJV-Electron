import { localStorageKeys } from '@config/localStorageKeys';
import { Collaborator } from '@entities/Collaborator';
import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { loginAttendant } from '@services/api/attendant/LoginAttendant';
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
  preload: () => void;
}

const useAttendantStore = create<UseAttendantStore>((set) => {
  return {
    isAuthenticated: true,
    isLoading: true,
    error: null,
    attendantLogged: null,

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

      const response = await loginAttendant(createSessionFormData);

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
  };
});

export { useAttendantStore };
