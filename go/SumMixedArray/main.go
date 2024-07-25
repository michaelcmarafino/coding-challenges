package kata

import (
	"fmt"
	"strconv"
)

func SumMix(arr []any) (total int) {
	for _, v := range arr {
		iv, _ := strconv.Atoi(fmt.Sprintf("%v", v))
		total += iv
	}
	return total
}
