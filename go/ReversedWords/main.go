package kata

import "strings"

func ReverseWords(str string) string {
	var sb strings.Builder
	strSlice := strings.Fields(str)
	for i := len(strSlice) - 1; i >= 0; i-- {
		sb.WriteString(strSlice[i] + " ")
	}
	return strings.TrimSpace(sb.String())
}
