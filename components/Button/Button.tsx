'use client'

import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  preset?: 'signIn' | 'submit'
  kind?: 'cta' | 'option'
  children: React.ReactNode
}

export function Button(
  { preset, kind, children, ...props }: ButtonProps
) {
  if (kind === 'cta') {
    return (
      <button
        className={styles.cta}
        {...props}
      >
        {children}
      </button>
    )
  }

    return (
      <button
        {...props}
      >
        {children}
      </button>
    )
}
