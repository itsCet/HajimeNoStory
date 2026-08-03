import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-ring-600 hover:bg-ring-700 text-white shadow-md shadow-ring-900/20',
  secondary: 'bg-ring-100 hover:bg-ring-200 text-ring-800 dark:bg-ring-900/40 dark:text-ring-100 dark:hover:bg-ring-900/60',
  ghost: 'bg-transparent hover:bg-black/5 dark:hover:bg-white/10 text-current',
  danger: 'bg-red-700 hover:bg-red-800 text-white',
}

export function Button({ variant = 'primary', className = '', ...props }: Props) {
  return (
    <button
      className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    />
  )
}
