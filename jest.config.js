// jest.config.js

module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/*.steps.ts'],
  reporters: [
    'default',
    ['./node_modules/jest-cucumber/dist/src/reporter', {
      'formatter': 'summary'
    }]
  ]
};

