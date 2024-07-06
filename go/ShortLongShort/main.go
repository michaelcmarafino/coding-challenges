package kata

import "unicode/utf8"

func Solution(a, b string) string {
	//if len(a) > len(b) {
	//return b + a + b
	//}
	//return a + b + a
	if utf8.RuneCountInString(a) > utf8.RuneCountInString(b) {
		return b + a + b
	}
	return a + b + a
}
