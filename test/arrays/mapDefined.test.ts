import { mapDefined } from "../../src/arrays/mapDefined"

describe("mapDefined", () => {
	const array: { test?: string | null }[] = [
		{ test: "foo" },
		{ test: "" },
		{},
		{ test: undefined },
		{ test: null },
	]

	it("maps an array, omitting undefined values", () => {
		expect(mapDefined(array, item => item.test)).toStrictEqual([
			"foo",
			"",
			null,
		])
	})

	it("maps an iterable, omitting undefined values", () => {
		expect(mapDefined(new Set(array), item => item.test)).toStrictEqual([
			"foo",
			"",
			null,
		])
	})

	it("receives index as second argument", () => {
		expect(mapDefined(array, (item, index) => index)).toStrictEqual([
			0, 1, 2, 3, 4,
		])
	})
})
