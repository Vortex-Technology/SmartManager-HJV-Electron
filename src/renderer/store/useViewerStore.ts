import { CreateRegisterFormData } from '@schemas/createRegisterFormSchema';
import { Viewer } from '@entities/Viewer';
import { create } from 'zustand';
import { CreateSessionFormData } from '@schemas/createSessionFormSchema';

interface UseViewerStore {
  isAuthenticated: boolean;
  isLoading: boolean;
  viewer: Viewer[];

  login: (createSessionFormData: CreateSessionFormData) => Promise<void>;
  register: (createRegisterFormData: CreateRegisterFormData) => Promise<void>;
}

const useViewerStore = create<UseViewerStore>((set, get) => {
  return {
    isAuthenticated: true,
    isLoading: true,
    viewer: [],

    login() {
      set();
    },
    register() {
      get();
    },
  };
});

export { useViewerStore };
