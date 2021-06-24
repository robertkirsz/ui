# UI Components Library

A library of UI components that I use in my apps.  
Made with React and styled-components, built with Rollup.

You can see it here: https://robertkirsz.github.io/ui

## Installation

```sh
yarn add @robertkirsz/ui
```

or

```sh
npm install @robertkirsz/ui
```

Make sure you have latest `react`, `react-dom` and `styled-components` installed as well.

## Usage

```jsx
import { Button } from '@robertkirsz/ui'

function App() {
  return (
    <Button primary size="small">
      Hello
    </Button>
  )
}
```

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
It will be available at http://localhost:6006/.

### Unit tests

```sh
yarn test
```

### Formatting code

```sh
yarn prettier
```

<img alt="Logo" align="right" src="src/images/logo.png" width="30px" />
Created by Robert Kirsz
