import type { Story, Meta } from '@storybook/react'
import type { Props } from './Button'
import React from 'react'
import Button from './Button'

const Template: Story<Props> = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  secondary: false,
  children: 'Button'
}

export const Secondary = Template.bind({})

Secondary.args = {
  secondary: true,
  children: 'Button'
}

export default {
  title: 'Button',
  component: Button
} as Meta
