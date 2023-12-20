import { useProductStore } from '@store/useProductStore';

export function useGetProducts() {
  const { getProducts, isLoading } = useProductStore((state) => ({
    getProducts: state.getProducts,
    isLoading: state.isLoading,
  }));

  return { getProducts, isLoading };
}
