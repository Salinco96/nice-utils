import { toArray } from "../../src/arrays/toArray"

describe("toArray", () => {
	it("returns directly the input array (no copy)", () => {
		const array = [1, 2, 2]
		expect(toArray(array)).toBe(array)
	})

	it("converts iterable into array", () => {
		expect(toArray(new Set([1, 2]))).toStrictEqual([1, 2])
	})

	it("converts typed array into Set", () => {
		expect(toArray(new Uint8Array([1, 2, 2]))).toStrictEqual([1, 2, 2])
	})
})
