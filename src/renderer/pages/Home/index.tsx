import { useProducts } from '@hooks/useProducts';
import { useRoutes } from '@hooks/useRoutes';

export function HomePage() {
  const { navigate } = useRoutes();
  const { products } = useProducts();

  return (
    <h1 className="">
      hello world!
      <br />
      <button type="button" onClick={() => navigate(`/ola/${12}`)}>
        OLA!
      </button>
    </h1>
  );
}
