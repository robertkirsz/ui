import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import type { ReactNode } from 'react'

const defaultTheme = {
  darkMode: false,
  primaryButtonColor: 'blue'
}

interface Theme {
  darkMode: boolean
  primaryButtonColor: string
}

export type Props = {
  theme?: Theme
  darkMode?: boolean
  children: ReactNode
}

export default function ThemeProvider({ theme = defaultTheme, darkMode = false, children }: Props) {
  const getTheme = (currentTheme: Theme): Theme => ({ ...currentTheme, ...theme, darkMode })
  return <StyledThemeProvider theme={getTheme}>{children}</StyledThemeProvider>
}
