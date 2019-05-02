module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  testMatch: ["**/__tests__/*\.(test|spec)\.(js|ts|tsx)"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  transform: {
    "^.+\.(ts|tsx)$": "ts-jest",
  },
  setupFiles: ["<rootDir>/src/__tests__/setupEnzyme.ts"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
