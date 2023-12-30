import logoIcon from '../../../assets/logos/vortexIcon.png';

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <img className="w-12 h-12 invert" src={logoIcon} alt="vortex logo" />
      <h1 className="text-5xl font-title text-white">Vortex</h1>
    </div>
  );
}
