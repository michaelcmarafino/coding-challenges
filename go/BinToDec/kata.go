package kata

import (
	"fmt"
	"strconv"
)

func BinToDec(bin string) int {
	num, err := strconv.ParseInt(bin, 2, 64)
	if err != nil {
		fmt.Println(err)
	}
	return int(num)
}
