package kata

import (
	"fmt"
	"strings"
)

func MultiTable(number int) string {
	var sb strings.Builder
	for i := 1; i <= 10; i++ {
		sb.WriteString(fmt.Sprintf("%d * %d = %d\n", i, number, i*number))
	}
	return strings.TrimRight(sb.String(), "\n")
}
