import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button from '../components/Button'
import type { Props } from '../components/Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' }
  }
} as Meta

const Template: Story<Props> = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
  children: 'Primary'
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'Secondary'
}

export const Large = Template.bind({})

Large.args = {
  size: 'large',
  children: 'Large'
}

export const Small = Template.bind({})

Small.args = {
  size: 'small',
  children: 'Small'
}
