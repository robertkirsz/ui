import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  bail: true,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: { '\\.css$': 'identity-obj-proxy' },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./setup-tests.ts'],
  testEnvironment: 'jsdom',
  verbose: true
}

export default config
