import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import image from '@rollup/plugin-image'
import type { RollupOptions } from 'rollup'

import packageJson from './package.json'

const config: RollupOptions = {
  input: 'src/index.ts',
  external: [...Object.keys(packageJson.devDependencies)],
  output: [
    { file: packageJson.main, format: 'cjs', sourcemap: true },
    { file: packageJson.module, format: 'es', sourcemap: true }
  ],
  plugins: [nodeResolve(), typescript(), image()],
  watch: {
    clearScreen: false
  }
}

export default config
