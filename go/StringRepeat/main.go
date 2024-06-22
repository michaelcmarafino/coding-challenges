package kata

import "strings"

func RepeatStr(repetitions int, value string) string {
	//var sb strings.Builder
	//for i := 0; i < repetitions; i++ {
	//sb.WriteString(value)
	//}
	//return sb.String()

	return strings.Repeat(value, repetitions)
}
