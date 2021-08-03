import styled, { css } from 'styled-components'

export type Props = {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
}

export default styled.button<Props>`
  border: none;
  cursor: pointer;

  ${({ primary = false, size = 'medium', theme }) => css`
    color: ${primary ? 'white' : theme.colors.text};
    border-radius: ${theme.borderRadius};
    background: ${primary ? theme.colors.primary : theme.colors.secondary};

    ${!primary && 'box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;'}

    ${size &&
    {
      small: 'font-size: 12px; padding: 10px 16px;',
      medium: 'font-size: 14px; padding: 11px 20px;',
      large: 'font-size: 16px; padding: 12px 24px;'
    }[size]}
  `}
`
