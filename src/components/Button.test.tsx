import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('Is a button', () => {
    const { getByText } = render(<Button>Button</Button>)
    const element = getByText('Button')

    expect(element).toBeInTheDocument()
    expect(element.tagName.toLowerCase()).toBe('button')
  })

  it('Is clickable', () => {
    const clickCallback = jest.fn()
    const { getByText } = render(<Button onClick={clickCallback}>Button</Button>)

    fireEvent.click(getByText('Button'))
    expect(clickCallback).toBeCalled()
  })
})
