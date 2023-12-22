import { CreateSessionData } from '@@types/CreateSessionData';
import { Viewer } from '@entities/Viewer';
import { create } from 'zustand';


interface UseViewerStore {
  isAuthenticated: boolean;
  isLoading: boolean;
  viewer: Viewer[];

  login: (createSessionData: CreateSessionData) => Promise<void>;
}

const useViewerStore = create<UseViewerStore>((set, get) =>{
  return {
    isAuthenticated: true,
    isLoading: true,
    viewer: [],
    login: async (createSessionData) => {
      // API

      if () {
        set({
          isAuthenticated: false,
        });
      }
    },
  };
})

export { useViewerStore}
