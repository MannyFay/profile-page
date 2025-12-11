import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv({
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2',
  variants: {
    variant: {
      primary: 'bg-stone-50 text-stone-900 hover:bg-stone-200 hover:scale-[1.02]',
      secondary: 'bg-stone-700 text-stone-50 hover:bg-stone-600',
      ghost: 'text-stone-50 hover:bg-stone-800',
      link: 'text-stone-50 underline hover:text-stone-300',
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-9 px-4 text-base',
      lg: 'h-10 px-6 text-lg',
      icon: 'h-10 w-10 lg:h-12 lg:w-12',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  children: React.ReactNode;
}

export function Button({ children, variant, size, fullWidth, className, ...props }: ButtonProps) {
  return (
    <button
      className={button({ variant, size, fullWidth, className })}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, ButtonVariants {
  children: React.ReactNode;
}

export function ButtonLink({
  children,
  variant,
  size,
  fullWidth,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={button({ variant, size, fullWidth, className })}
      {...props}
    >
      {children}
    </a>
  );
}
