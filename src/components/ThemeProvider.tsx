import React from 'react'
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components'
import type { ReactNode } from 'react'

import defaultTheme from '../theme'

export type Props = {
  theme?: DefaultTheme
  darkMode?: boolean
  children: ReactNode
}

export default function ThemeProvider({ theme = defaultTheme, darkMode = false, children }: Props) {
  const getTheme = (currentTheme: DefaultTheme): DefaultTheme => ({
    ...currentTheme,
    ...theme,
    darkMode
  })

  return <StyledThemeProvider theme={getTheme}>{children}</StyledThemeProvider>
}
