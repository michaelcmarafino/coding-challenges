// Simple, given a string of words, return the length of the shortest word(s).

package kata

import "strings"

func FindShort(s string) int {
	words := strings.Fields(s)
	result := len(words[0])
	for _, v := range words {
		if len(v) < result {
			result = len(v)
		}
	}
	return result
}
