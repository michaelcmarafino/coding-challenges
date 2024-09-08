package kata

import "math"

func NearestSq(n int) int {
	num := int(math.Round(math.Sqrt(float64(n))))
	return num * num
}
