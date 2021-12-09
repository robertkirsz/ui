import type { ButtonHTMLAttributes } from 'react'
import type { Theme } from '../types'
import React from 'react'
import { cn } from '../utils'
import styles from './Button.module.css'

export type Props = {
  secondary?: boolean
} & Theme &
  ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ secondary, ...props }: Props) {
  return (
    <button
      className={cn(styles.button, secondary ? styles.secondary : styles.primary)}
      {...props}
    />
  )
}
