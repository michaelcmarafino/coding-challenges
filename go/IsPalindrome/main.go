package kata

import "strings"

func IsPalindrome(str string) bool {
	//runes := []rune(str)
	//for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
	//runes[i], runes[j] = runes[j], runes[i]
	//}
	//return strings.ToLower(string(runes)) == strings.ToLower(str)

	str = strings.ToLower(str)
	n := len(str)
	for i := 0; i < n; i++ {
		n -= 1
		if str[i] != str[n] {
			return false
		}
	}
	return true
}
