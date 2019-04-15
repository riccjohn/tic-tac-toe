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
  setupFiles: ["<rootDir>/src/setupEnzyme.ts"],
};
