import { toTypeArray } from "@/arrays/toTypeArray"

describe("toTypeArray", () => {
	it("returns directly the input array (no copy)", () => {
		const array = new Uint8Array([1, 2, 2])
		expect(toTypeArray(array, Uint8Array)).toBe(array)
	})

	it("converts arrays into typed arrays", () => {
		expect(toTypeArray([1, 2, -2], Uint8Array)).toStrictEqual(
			new Uint8Array([1, 2, 254]),
		)
		expect(toTypeArray([1, 2, -2], Uint16Array)).toStrictEqual(
			new Uint16Array([1, 2, 65534]),
		)
		expect(toTypeArray([1, 2, -2], Uint32Array)).toStrictEqual(
			new Uint32Array([1, 2, 4294967294]),
		)
		expect(toTypeArray([1, 2, 123123123123123], Int8Array)).toStrictEqual(
			new Int8Array([1, 2, -77]),
		)
		expect(toTypeArray([1, 2, 123123123123123], Int16Array)).toStrictEqual(
			new Int16Array([1, 2, 29619]),
		)
		expect(toTypeArray([1, 2, 123123123123123], Int32Array)).toStrictEqual(
			new Int32Array([1, 2, -704351309]),
		)
	})

	it("converts iterable into typed array", () => {
		expect(toTypeArray(new Set([1, 2, -2]), Uint8Array)).toStrictEqual(
			new Uint8Array([1, 2, 254]),
		)
	})

	it("converts typed array into another type", () => {
		expect(toTypeArray(new Int32Array([1, 2, -2]), Uint8Array)).toStrictEqual(
			new Uint8Array([1, 2, 254]),
		)
	})
})
