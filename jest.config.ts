import type { Config } from "jest"

const config: Config = {
	testEnvironment: "node",

	// TypeScript
	moduleNameMapper: {
		"@/(.*)": "<rootDir>/src/$1",
	},
	transform: {
		"^.+[.]ts$": ["ts-jest", {}],
	},

	// Mocks
	clearMocks: true,
	resetMocks: true,
	restoreMocks: true,

	// Coverage
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageReporters: ["html", "text"],
}

export default config
