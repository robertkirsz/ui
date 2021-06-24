import React from 'react'
import { Meta } from '@storybook/react'

import Button from '../components/Button'
import type { Props } from '../components/Button'

// NOTE: This should be like this 👇 but it doesn't generate props table for styled-components
// const Template: Story<Props> = args => <Button {...args}>Button</Button>
export const Primary = (args: Props) => <Button {...args}>Button</Button>

Primary.args = { primary: true }

export const Secondary = (args: Props) => <Button {...args}>Button</Button>

export const Small = (args: Props) => <Button {...args}>Button</Button>

Small.args = { size: 'small' }

export const Medium = (args: Props) => <Button {...args}>Button</Button>

Medium.args = { size: 'medium' }

export const Large = (args: Props) => <Button {...args}>Button</Button>

Large.args = { size: 'large' }

export default {
  title: 'Button',
  component: Primary
} as Meta
