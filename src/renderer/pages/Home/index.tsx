import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

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
