module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  testMatch: ['**/__tests__/*\.(test|spec)\.(js|ts|tsx)'],
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  transform: {
    '^.+\.(ts)$': 'ts-jest'
  }
};
