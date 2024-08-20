package kata

import (
	"strings"
	"unicode"
)

func ToAlternatingCase(str string) string {
	var sb strings.Builder
	//for i := 0; i < len(str); i++ {
	//if string(str[i]) != strings.ToUpper(string(str[i])) {
	//sb.WriteString(strings.ToUpper(string(str[i])))
	//} else {
	//sb.WriteString(strings.ToLower(string(str[i])))
	//}
	//}
	for _, char := range str {
		if unicode.IsUpper(char) {
			sb.WriteRune(unicode.ToLower(char))
		} else {
			sb.WriteRune(unicode.ToUpper(char))
		}
	}
	return sb.String()
}
