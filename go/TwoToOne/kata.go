package kata

import "strings"

func TwoToOne(s1 string, s2 string) string {
	alphabet := "abcdefghijklmnopqrstuvwxyz"
	newStr := s1 + s2
	result := ""
	for _, letter := range alphabet {
		if strings.Contains(newStr, string(letter)) {
			result += string(letter)
		}
	}
	return result
}
