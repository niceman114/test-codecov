/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ['**/tests/**/*.test.ts'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './coverage',
        outputName: 'junit.xml',
        suiteName: 'Jest Tests',
      },
    ],
  ],
};
