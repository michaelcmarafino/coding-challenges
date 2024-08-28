package kata

import "math"

func SquareOrSquareRoot(arr []int) []int {
	result := make([]int, len(arr))

	for i, v := range arr {
		sqrt := math.Sqrt(float64(v))

		if sqrt == math.Floor(sqrt) {
			result[i] = int(sqrt)
		} else {
			result[i] = v * v
		}
	}
	return result
}
