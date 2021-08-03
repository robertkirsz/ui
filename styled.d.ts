import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    darkMode: boolean
    borderRadius: string
    colors: {
      text: string
      primary: string
      secondary: string
    }
  }
}
