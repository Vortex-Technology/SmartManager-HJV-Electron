import scrollTriggerPlugin from 'gsap/ScrollTrigger';
import { useRoutes } from '@hooks/useRoutes';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { UserRoundCog, UserSquare2Icon, UsersRound } from 'lucide-react';
import { usePreload } from '@hooks/usePreload';
import { Loading } from '@components/Loading';

export function HomePage() {
  const { navigate } = useRoutes();
  const { isLoading } = usePreload();

  const el = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    gsap.registerPlugin(scrollTriggerPlugin);
    gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '#section-home',
            start: 'top 0px',
            end: 'bottom 300px',
            // markers: true,
            scrub: true,
          },
        })
        .to('#title', {
          x: 100,
          opacity: 0,
        })
        .to('#subtitle', {
          x: 100,
          opacity: 0,
        });
    }, el);

    return () => {
      gsap.killTweensOf('#section-home');
    };
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col w-screen h-screen">
      <div
        ref={el}
        id="section-home"
        className="relative flex flex-col items-center justify-center min-w-[100vw]  min-h-[100vh] bg-tertiary-700"
      >
        <div className="absolute flex flex-row-reverse gap-4 top-0 right-0 py-4 px-6">
          <button
            type="button"
            className="text-white flex items-center gap-2 leading-none text-xs uppercase font-bold opacity-80 hover:text-tertiary-200 ease-in-out duration-300"
            onClick={() => navigate('/login/administrator')}
          >
            <UserRoundCog size={16} />
            Login de administrador
          </button>

          <button
            type="button"
            className="text-white flex items-center gap-2 leading-none text-xs uppercase font-bold opacity-80 hover:text-tertiary-200 ease-in-out duration-300"
            onClick={() => navigate('/login/seller')}
          >
            <UserSquare2Icon size={16} />
            Login de vendedor
          </button>

          <button
            type="button"
            className="text-white flex items-center gap-2 leading-none text-xs uppercase font-bold opacity-80 hover:text-tertiary-200 ease-in-out duration-300"
            onClick={() => navigate('/login/attendant')}
          >
            <UsersRound size={16} />
            Login de atendente
          </button>
        </div>

        <h1
          className="text-8xl font-title font-bold font text-white"
          id="title"
        >
          Smart Manager
        </h1>
        <h3 id="subtitle" className="mt-6 font-bold opacity-80 text-white ">
          Gerenciamento Descomplicado, Resultados Excepcionais
        </h3>
      </div>
      <div className="min-h-[100vh] w-full">ola</div>
    </div>
  );
}
