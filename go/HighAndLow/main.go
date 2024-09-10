package kata

import (
	"fmt"
	"strconv"
	"strings"
)

func HighAndLow(in string) string {
	var min, max int
	for i, v := range strings.Fields(in) {
		n, _ := strconv.Atoi(string(v))

		if i == 0 {
			max = n
			min = n
		}

		if n > max {
			max = n
		}

		if n < min {
			min = n
		}
	}
	return fmt.Sprintf("%d %d", max, min)
}
