// useLoginStore.ts
import { Administrator } from '@entities/Administrator';
import { CreateSessionFormData} from '@schemas/createSessionFormSchema'
import {CreateRegisterFormData} from '@schemas/createRegisterFormSchema'
import { create } from 'zustand';

interface UseAdministratorStore {
  isAuthenticated: boolean;
  isLoading: boolean;
  administrator: Administrator[]

  login: (createSessionFormData: CreateSessionFormData) => Promise<void>;
  register: (createRegisterFormData:CreateRegisterFormData) => Promise<void>;
}

const useAdministratorStore = create<UseAdministratorStore>((set, get) => {
  return {
    isAuthenticated: true,
    isLoading: true,
    administrator: [],
    login: async (createSessionFormData) => {
      // API

      if () {
        set({
          isAuthenticated: false,
        });
      }
    },

    register: async (createRegisterFormData) => {
      // API
      get()
    }
  };
});

export { useAdministratorStore };
