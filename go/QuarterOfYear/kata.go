package kata

import "math"

func QuarterOf(month int) int {
	//if month <= 3 {
	//return 1
	//} else if month <= 6 {
	//return 2
	//} else if month <= 9 {
	//return 3
	//}
	//return 4

	quarter := math.Ceil(float64(month) / 3)
	return int(quarter)
}
