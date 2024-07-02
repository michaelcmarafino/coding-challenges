package kata

import "math"

func Litres(time float64) int {
	return int(math.Trunc(time / 2))
}
