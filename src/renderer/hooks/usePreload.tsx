import { useEffect } from 'react';
import { useGetProducts } from './useGetProducts';
import { socket } from '../services/socket/socketConfig';

export function usePreload() {
  const { getProducts, isLoading } = useGetProducts();

  useEffect(() => {
    socket.connect();
    getProducts();
  }, [getProducts]);

  return { isLoading };
}
