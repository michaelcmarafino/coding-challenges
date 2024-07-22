package kata

import (
	"fmt"
	"strings"
)

func countSheep(num int) (result string) {
	//for i := 1; i <= num; i++ {
	//result += (strconv.Itoa(i) + " sheep...")
	//}
	//return result

	var sb strings.Builder

	for i := 1; i <= num; i++ {
		fmt.Fprintf(&sb, "%v sheep...", i)
	}
	return sb.String()
}
