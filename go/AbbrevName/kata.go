package kata

import "strings"

func AbbrevName(name string) string {

	//b := []byte(name)
	//firstInitial := b[0]
	//var secondInitialIndex int
	//for i, v := range b {
	//if v == ' ' {
	//secondInitialIndex = i
	//}
	//}
	//secondInitial := b[secondInitialIndex+1]
	//return strings.ToUpper(string(firstInitial)) + "." + strings.ToUpper(string(secondInitial))

	//words := strings.Fields(name)
	//return strings.ToUpper(string(words[0][0])) + "." + strings.ToUpper(string(words[1][0]))

	firstLetterToUpper := func(str string) string {
		return strings.ToUpper(string([]rune(str)[0]))
	}

	var names = strings.Fields(name)
	return firstLetterToUpper(names[0]) + "." + firstLetterToUpper(names[1])
}
