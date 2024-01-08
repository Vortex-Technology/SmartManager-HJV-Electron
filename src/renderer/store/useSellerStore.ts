import { localStorageKeys } from '@config/localStorageKeys';
import { CreateSessionFormData } from '@schemas/createSessionFormSchema';
import { loginSeller } from '@services/api/seller/loginSellerRequest';
import { statusCode } from '@services/api/responses/statusCode';
import { connection } from '@services/axios-config';
import { localStorageFunctions } from '@services/localStorage/localStorageFunctions';
import { create } from 'zustand';
import { Collaborator } from '@entities/Collaborator';
import { getSellerRequest } from '@services/api/seller/getASellerRequest';

interface UseSellerStore {
  isAuthenticated: boolean;
  isLoading: boolean;
  sellerLogged: null | Collaborator;

  error: string | null;

  login: (createSessionFormData: CreateSessionFormData) => Promise<boolean>;
  preload: () => Promise<void>;
  getSeller: () => Promise<boolean>;
}

const useSellerStore = create<UseSellerStore>((set, get) => {
  return {
    isAuthenticated: false,
    isLoading: true,
    error: null,
    sellerLogged: null,

    preload: async () => {
      set({ isLoading: true });

      const accessToken = localStorageFunctions.get<string>(
        localStorageKeys.accessToken,
      );

      if (accessToken) connection.setDefaultBearerToken(accessToken);
      set({ isLoading: false });

      const { getSeller } = get();
      await getSeller();
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

      const { getSeller } = get();
      await getSeller();

      return true;
    },

    getSeller: async () => {
      const statusCodeOfErrors = [
        statusCode.BadRequest,
        statusCode.Conflict,
        undefined,
      ];

      const response = await getSellerRequest();

      if (statusCodeOfErrors.includes(response.status)) {
        set({ isLoading: false, error: response.message });
        return false;
      }

      set({
        sellerLogged: response.data?.administrator,
        isLoading: false,
        isAuthenticated: true,
      });

      return true;
    },
  };
});

export { useSellerStore };
