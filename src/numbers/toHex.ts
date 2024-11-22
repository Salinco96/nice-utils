export function toHex(value: number, size?: number): string {
	const hex = value.toString(16)
	return size ? hex.padStart(size, "0") : hex
}
