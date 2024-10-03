export function positiveSum(arr: number[]): number {
    return arr.filter((num) => num > 0).reduce((a, b) => a + b, 0)
}
