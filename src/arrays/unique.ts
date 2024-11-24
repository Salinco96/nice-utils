import type { Primitive } from "@/types/types"

export function unique<T extends Primitive>(items: Iterable<T>): T[] {
	return Array.from(new Set(items))
}
