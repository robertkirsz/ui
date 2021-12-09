import '../src/styles/fonts.css'
import '../src/styles/base.css'

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
