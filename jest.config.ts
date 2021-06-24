import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  bail: true,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./src/tests/setupTests.ts'],
  testEnvironment: 'jsdom',
  verbose: true
}

export default config
