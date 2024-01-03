// import { useProducts } from '@hooks/useProducts';
import { useRoutes } from '@hooks/useRoutes';

export function HomePage() {
  const { navigate } = useRoutes();
  // const { products } = useProducts();

  return (
    <div className="flex justify-center items-center flex-col bg-teal-200 h-full">
      <h1>hello world!</h1>
      <br />
      <button type="button" onClick={() => navigate(`/administrator/login`)}>
        Administrador
      </button>
      <br />
      <br />
      <br />
      <button type="button" onClick={() => navigate(`/attendant/login`)}>
        Atendente
      </button>
      <br />
      <br />
      <br />
      <button type="button" onClick={() => navigate(`/seller/login`)}>
        Vendedor
      </button>
      <br />
      <br />
      <br />
      <button type="button" onClick={() => navigate(`/register/administrator`)}>
        Cadastrar Administrator
      </button>
      <br />
      <br />
      <br />
      <button type="button" onClick={() => navigate(`/register/employee`)}>
        Cadastrar Employee
      </button>
    </div>
  );
}
