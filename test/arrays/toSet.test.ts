import { toSet } from "../../src/arrays/toSet"

describe("toSet", () => {
	it("returns directly the input Set (no copy)", () => {
		const set = new Set([1, 2])
		expect(toSet(set)).toBe(set)
	})

	it("converts array into Set", () => {
		expect(toSet([1, 2, 2])).toStrictEqual(new Set([1, 2]))
	})

	it("converts typed array into Set", () => {
		expect(toSet(new Uint8Array([1, 2, 2]))).toStrictEqual(new Set([1, 2]))
	})
})
