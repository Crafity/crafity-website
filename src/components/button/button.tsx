import { ReactNode } from 'react'

import styles from './button.module.css'

export interface ButtonProps {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export interface ButtonLinkProps {
  href: string
}

export interface ButtonOnClickProps {
  onClick: () => void
}

export function Button({
  children,
  type = 'button',
  ...rest
}: ButtonProps & (ButtonLinkProps | ButtonOnClickProps)) {
  if ('href' in rest) {
    return (
      <a className={styles.button} href={rest.href}>
        {children}
      </a>
    )
  }
  return (
    <button className={styles.button} onClick={rest.onClick} type={type}>
      {children}
    </button>
  )
}
