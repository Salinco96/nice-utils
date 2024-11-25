import { isString } from "../types/isString"

export function matchGroup<G extends string>(
	value: string,
	regex: RegExp,
	group: number | G = 1,
): string | undefined {
	const match = value.match(regex)
	return isString(group) ? match?.groups?.[group] : match?.at(group)
}
