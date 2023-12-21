// useLoginStore.ts
import { Administrator } from '@entities/Administrator';
import { CreateSessionData } from '@@types/CreateSessionData';
import { create } from 'zustand';


interface UseAdministratorStore {
  isAuthenticated: boolean;
  isLoading: boolean;
  administrator: Administrator[]

  login: (createSessionData: CreateSessionData) => Promise<void>;
}

const useAdministratorStore = create<UseAdministratorStore>((set, get) => {
  return {
    isAuthenticated: true,
    isLoading: true,
    administrator: [],
    login: async (createSessionData) => {
      // API

      if () {
        set({
          isAuthenticated: false,
        });
      }
    },
  };
});

export { useAdministratorStore };
