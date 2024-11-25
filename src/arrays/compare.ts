import { isString } from "../types/isString"

export function compare(value: bigint, other: bigint): number
export function compare(value: number, other: number): number
export function compare(value: string, other: string): number

export function compare(
	value: bigint | number | string,
	other: bigint | number | string,
): number {
	if (isString(value)) {
		return value.localeCompare(other as string)
	}

	if (value === other) {
		return 0
	}

	return (value as number) < (other as number) ? 1 : -1
}
