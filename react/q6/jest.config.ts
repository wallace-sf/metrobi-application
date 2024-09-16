import { type JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.ts',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/**/base/*.ts',
    '!<rootDir>/jest.config.ts',
    '!<rootDir>/tailwind.config.ts',
    '!<rootDir>/useZenoParadox.ts',
  ],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
};

export default jestConfig;
