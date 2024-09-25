export function squareSum(numbers: number[]): number {
    return numbers.reduce((acc, c) => (acc += c * c), 0)
}
