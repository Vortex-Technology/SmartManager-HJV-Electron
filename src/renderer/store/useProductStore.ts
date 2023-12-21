import { create } from 'zustand';

interface UseProductStore {
  products: any[];
  isLoading: boolean;

  getProducts: () => Promise<void>;
}

const useProductStore = create<UseProductStore>((set, get) => {
  return {
    products: [],
    isLoading: true,

    getProducts: async () => {
      // chamada api

      const { isLoading } = get();
      set({
        isLoading: false,
      });
    },
  };
});

export { useProductStore };
