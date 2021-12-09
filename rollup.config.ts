import type { RollupOptions } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import styles from 'rollup-plugin-styles'
import { visualizer } from 'rollup-plugin-visualizer'
import packageJson from './package.json'

const config: RollupOptions = {
  input: 'src/index.ts',
  external: [...Object.keys(packageJson.devDependencies)],
  output: [
    { file: packageJson.main, format: 'cjs', sourcemap: true },
    { file: packageJson.module, format: 'es', sourcemap: true }
  ],
  plugins: [nodeResolve(), typescript(), styles({ modules: true }), visualizer()],
  watch: { clearScreen: false }
}

export default config
