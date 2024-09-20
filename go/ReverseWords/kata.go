package kata

import "strings"

func Reverse(in string) string {
	var sb strings.Builder
	runes := []rune(in)
	for i := len(runes) - 1; 0 <= i; i-- {
		sb.WriteRune(runes[i])
	}
	return sb.String()
}

func ReverseWords(str string) string {
	words := strings.Split(str, " ")
	var sb strings.Builder
	for i := 0; i < len(words); i++ {
		sb.WriteString(Reverse(words[i]))
		if i < len(words)-1 {
			sb.WriteString(" ")
		}
	}

	return sb.String()

}
