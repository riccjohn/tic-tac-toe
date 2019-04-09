module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  testMatch: ['**/__tests__/*\.(test|spec)\.(js|ts)'],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\.(ts)$': 'ts-jest'
  }
};
