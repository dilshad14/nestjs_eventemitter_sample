// jest.config.ts
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true, // Enables coverage collection
    coverageDirectory: 'coverage', // Directory to output coverage files
    coverageReporters: ['json', 'lcov', 'text', 'clover'], // Coverage report formats
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
    ], // Ignore patterns for coverage
};
