package kata

import "strings"

//func StringToArray(str string) []string {
//return strings.Split(str, " ")
//}

func StringToArray(str string) []string {
	return strings.Fields(str)
}
