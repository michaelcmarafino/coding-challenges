package kata

import "strings"

func AbbrevName(name string) string {

	b := []byte(name)
	firstInitial := b[0]
	var secondInitialIndex int
	for i, v := range b {
		if v == ' ' {
			secondInitialIndex = i
		}
	}
	secondInitial := b[secondInitialIndex+1]
	return strings.ToUpper(string(firstInitial)) + "." + strings.ToUpper(string(secondInitial))
}
