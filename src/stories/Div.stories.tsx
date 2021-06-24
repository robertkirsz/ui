import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react'

import Div from '../components/Div'
import type { Props } from '../components/Div'

const Box = styled.div`
  padding: 12px 16px;
  background: powderblue;
  border-radius: 4px;
  font: 16px/1 sans-serif;
  color: white;
`

// NOTE: This should be like this 👇 but it doesn't generate props table for styled-components
// export const Default: Story<Props> = (args: Props) => (
export const Default = (props: Props) => (
  <Div {...props}>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
  </Div>
)

export default {
  title: 'Div',
  component: Default
} as Meta
