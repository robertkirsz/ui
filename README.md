# UI Components Library

A library of UI components that I use in my apps.  
Made with React and styled-components, built with Rollup.

## Installation

```js
yarn add @robertkirsz/ui

// or

npm install @robertkirsz/ui
```

Make sure you have latest `react`, `react-dom` and `styled-components` installed as well.

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, Button } from '@robertkirsz/ui'

const App = () => (
  <Button primary size="small">
    Hello
  </Button>
)

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
```

All available components with usage examples and their documentation can be found [here](https://robertkirsz.github.io/ui).

## Drak mode and custom themes

🚧 Writing in progress

## Troubleshooting

If you don't see Intellisense suggestions for components' props in your editor, make sure you have `@types/react` and `@types/styled-components` installed as your devDependencies.

## Development

Make sure you're using Node version specified in `.nvmrc` file. If you have [nvm](https://github.com/nvm-sh/nvm) installed, you can do this:

```sh
nvm use
```

It will set the proper Node version for you (or prompt you to install it).

### Install dependencies

```sh
yarn install
```

### Start Storybook

```sh
yarn storybook
```

You can use it as a development environment as well as the showcase app for all components.  
It will be available at http://localhost:6006.

### Unit tests

```sh
yarn test
```

### Formatting code

```sh
yarn prettier
```

<img alt="Logo" title="Created by Robert Kirsz" src="src/images/logo.png" width="30px" />
