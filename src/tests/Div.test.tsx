import * as React from 'react'
import { render } from '@testing-library/react'

import Div from '../components/Div'

describe('Div', () => {
  it('Is a div', () => {
    const { getByText } = render(<Div>Div</Div>)
    const element = getByText('Div')

    expect(element).toBeInTheDocument()
    expect(element.tagName.toLowerCase()).toBe('div')
  })
})
