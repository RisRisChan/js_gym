module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "clover"],
  testEnvironment: "node",
  testMatch: ["**/*.test.js"],
  reporters: [
    "default",
    ["jest-junit", {
      outputDirectory: ".",
      outputName: "junit.xml",
    }]
  ]
};
