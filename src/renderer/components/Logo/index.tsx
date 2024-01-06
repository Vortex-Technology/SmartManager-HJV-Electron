import { tv } from 'tailwind-variants';
import logoIcon from '../../../assets/logos/vortexIcon.png';

const logoRootStyles = tv({
  base: 'flex items-center gap-2',
});

const logoImgStyles = tv({
  variants: {
    size: {
      xxs: 'w-4 h-4',
      xs: 'w-5 h-5',
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-10 h-10',
      xl: 'w-12 h-12',
      '2xl': 'w-14 h-14',
      '3xl': 'w-16 h-16',
      '4xl': 'w-[4.5rem] h-[4.5rem]',
    },
    color: {
      invert: 'invert',
    },
  },

  defaultVariants: {
    size: 'xl',
  },
});

const logoTitleStyles = tv({
  base: ' font-title',
  variants: {
    size: {
      xxs: 'text-lg',
      xs: 'text-xl',
      sm: 'text-2xl',
      md: 'text-3xl',
      lg: 'text-4xl',
      xl: 'text-5xl',
      '2xl': 'text-6xl',
      '3xl': 'text-7xl',
      '4xl': 'text-8xl',
    },
    color: {
      invert: 'text-white',
    },
  },

  defaultVariants: {
    size: 'xl',
  },
});

interface LogoProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  color?: 'invert';
  className?: string;
  isToShowTitle?: boolean;
  title?: string;
}

export function Logo({
  size,
  color,
  className,
  isToShowTitle = true,
  title = 'Vortex',
}: LogoProps) {
  return (
    <div className={logoRootStyles({ className })}>
      <img
        className={logoImgStyles({ size, color })}
        src={logoIcon}
        alt="vortex logo"
      />
      {isToShowTitle && (
        <h1 className={logoTitleStyles({ size, color })}>{title}</h1>
      )}
    </div>
  );
}
