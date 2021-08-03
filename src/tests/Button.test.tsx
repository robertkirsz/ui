import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button from '../components/Button'
import ThemeProvider from '../components/ThemeProvider'

describe('Button', () => {
  it('Is a button', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Button>Button</Button>
      </ThemeProvider>
    )
    const element = getByText('Button')

    expect(element).toBeInTheDocument()
    expect(element.tagName.toLowerCase()).toBe('button')
  })

  it('Is clickable', () => {
    const clickCallback = jest.fn()
    const { getByText } = render(
      <ThemeProvider>
        <Button onClick={clickCallback}>Button</Button>
      </ThemeProvider>
    )

    fireEvent.click(getByText('Button'))
    expect(clickCallback).toBeCalled()
  })

  it('Matches snapshots', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <div data-testid="Container">
          <Button primary>Button</Button>
          <Button>Button</Button>
          <Button size="small">Button</Button>
          <Button size="medium">Button</Button>
          <Button size="large">Button</Button>
        </div>
      </ThemeProvider>
    )

    expect(getByTestId('Container')).toMatchSnapshot()
  })
})
