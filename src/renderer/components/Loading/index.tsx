import logoIcon from '../../../assets/logos/vortexIcon.png';

export function Loading() {
  return (
    <main className="w-screen h-screen fixed bg-neutral-100 flex flex-col items-center gap-8 justify-center">
      <div className="w-[100px] fill-mode-both h-[100px] bg-tertiary-700 animate-bounce rounded-full shadow-xl shadow-black/70">
        <img
          src={logoIcon}
          alt="vortex"
          className="invert p-4 fill-mode-both animate-spin shadow-inner rounded-full shadow-white/70"
        />
      </div>

      <span className="text-6xl font-bold font-title text-tertiary-700">
        Smart manager
      </span>
    </main>
  );
}
