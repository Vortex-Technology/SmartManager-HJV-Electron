import { Slot } from '@radix-ui/react-slot';
import { HtmlHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';

const buttonTextStyles = tv({
  base: 'text-white text-sm group-data-[size=sm]:text-sm group-data-[size=xs]:text-xs group-data-[size=xxs]:text-xs group-data-[active=true]:text-white',
});

interface TextProps extends HtmlHTMLAttributes<HTMLSpanElement> {
  asChild?: boolean;
}

export function Text({ asChild, className, ...props }: TextProps) {
  const TextContainer = asChild ? Slot : 'span';

  return (
    <TextContainer className={buttonTextStyles({ className })} {...props} />
  );
}

Text.displayName = 'Button.Text';
