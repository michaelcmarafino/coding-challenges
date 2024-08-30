package kata

import "strings"

func GetCount(str string) (count int) {
	for _, v := range str {
		if strings.ContainsRune("aeiou", v) {
			count++
		}
	}
	return count
}
