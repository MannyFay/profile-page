import { tv, type VariantProps } from 'tailwind-variants';

export const card = tv({
  base: 'rounded-md bg-stone-800',
  variants: {
    padding: {
      none: 'p-0',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
    },
  },
  defaultVariants: {
    padding: 'md',
  },
});

export type CardVariants = VariantProps<typeof card>;

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, CardVariants {
  children: React.ReactNode;
}

export function Card({ children, padding, className, ...props }: CardProps) {
  return (
    <div
      className={card({ padding, className })}
      {...props}
    >
      {children}
    </div>
  );
}
