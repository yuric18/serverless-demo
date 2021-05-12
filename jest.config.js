module.exports = {
  bail: 1,
  displayName: 'test',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/index.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  coverageThreshold: {
    global: {
      lines: 100,
      branches: 100,
      functions: 100,
      statements: 100
    }
  }
};
