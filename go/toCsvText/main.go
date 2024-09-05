package kata

import (
	"strconv"
	"strings"
)

func ToCsvText(array [][]int) string {

	var sb strings.Builder

	for _, innerArr := range array {
		for i, innerEl := range innerArr {
			if i+1 == len(innerArr) {
				sb.WriteString(strconv.Itoa(innerEl) + "\n")
			} else {
				sb.WriteString(strconv.Itoa(innerEl) + ",")
			}
		}
	}
	result := sb.String()
	return result[:len(result)-1]

}
