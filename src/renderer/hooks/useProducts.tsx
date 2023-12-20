import { useProductStore } from '@store/useProductStore';

export function useProducts() {
  const { products } = useProductStore((state) => ({
    products: state.products,
  }));

  return { products };
}
