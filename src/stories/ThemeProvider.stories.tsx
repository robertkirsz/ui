import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react'

import ThemeProvider from '../components/ThemeProvider'
import type { Props } from '../components/ThemeProvider'

const Text = styled.p`
  color: ${props => (props.theme.darkMode ? 'white' : 'black')};
`

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: ${props => (props.theme.darkMode ? 'black' : 'white')};
`

// NOTE: This should be like this 👇 but it doesn't generate props table for styled-components
// export const LightMode: Story<Props> = (args: Props) => (
export const LightMode = (args: Props) => (
  <ThemeProvider {...args}>
    <Background>
      <Text>Light mode</Text>
    </Background>
  </ThemeProvider>
)

LightMode.args = { darkMode: false }

export const DarkMode = (args: Props) => (
  <ThemeProvider {...args}>
    <Background>
      <Text>Dark mode</Text>
    </Background>
  </ThemeProvider>
)

DarkMode.args = { darkMode: true }

export default {
  title: 'ThemeProvider',
  component: LightMode
} as Meta
