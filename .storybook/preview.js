import ThemeProvider from '../src/components/ThemeProvider'
import BasicStyles from '../src/components/BasicStyles'

export const decorators = [
  Story => (
    <ThemeProvider>
      <BasicStyles />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    sort: 'alpha',
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
