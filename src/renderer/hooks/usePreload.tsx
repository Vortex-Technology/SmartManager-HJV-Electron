import { useEffect } from 'react';
import { useGetProducts } from './useGetProducts';

export function usePreload() {
  const { getProducts, isLoading } = useGetProducts();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return { isLoading };
}
