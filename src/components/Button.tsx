import React from 'react'
import styled, { css } from 'styled-components'
import type { HTMLAttributes, ReactNode } from 'react'

export type Props = {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  children?: ReactNode
}

export default function Button({
  primary = false,
  size = 'medium',
  ...props
}: Props & HTMLAttributes<HTMLElement>) {
  return <Wrapper primary={primary} size={size} {...props} />
}

const Wrapper = styled.button<Props>`
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ primary, size }) => css`
    color: ${primary ? 'white' : '#333'};
    background: ${primary ? '#1ea7fd' : 'none'};
    ${!primary && 'box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;'}
    ${size &&
    {
      small: 'font-size: 12px; padding: 10px 16px;',
      medium: 'font-size: 14px; padding: 11px 20px;',
      large: 'font-size: 16px; padding: 12px 24px;'
    }[size]}
  `}
`
