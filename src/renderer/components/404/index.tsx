import logoIcon from '../../../assets/logos/vortexIcon.png';

export function Page404() {
  return (
    <main className="w-full h-full bg-neutral-100 flex flex-col items-center gap-2 justify-center">
      <div className="w-[100px] fill-mode-both h-[100px] bg-tertiary-700  rounded-full shadow-xl shadow-black/70">
        <img
          src={logoIcon}
          alt="vortex"
          className="invert p-4 fill-mode-both animate-spin rounded-full"
        />
      </div>

      <span className="text-6xl font-bold font-title text-tertiary-700">
        Smart Manager
      </span>
      <span className="text-sm uppercase font-bold opacity-60">
        Página indisponível
      </span>
      <div className="fill-mode-both w-[50px] h-[50px] mt-10 bg-purple900 animate-square-spin shadow-purpleShadow shadow-purple900 rounded-[10px]" />
    </main>
  );
}
