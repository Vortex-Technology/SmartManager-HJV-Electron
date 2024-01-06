import { localStorageKeys } from '@config/localStorageKeys';
import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { loginSeller } from '@services/api/seller/LoginSeller';
import { statusCode } from '@services/api/responses/statusCode';
import { connection } from '@services/axios-config';
import { localStorageFunctions } from '@services/localStorage/localStorageFunctions';
import { create } from 'zustand';
import { Collaborator } from '@entities/Collaborator';

interface UseSellerStore {
  isAuthenticated: boolean;
  isLoading: boolean;
  sellerLogged: null | Collaborator;

  error: string | null;

  login: (createSessionFormData: CreateSessionFormData) => Promise<boolean>;
  preload: () => void;
}

const useSellerStore = create<UseSellerStore>((set) => {
  return {
    isAuthenticated: false,
    isLoading: true,
    error: null,
    sellerLogged: null,

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

      const response = await loginSeller(createSessionFormData);

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

export { useSellerStore };
