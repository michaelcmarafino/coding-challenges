package kata

func RemoveChar(word string) string {
	//_, size := utf8.DecodeRuneInString(word)
	//word = word[size:]
	//_, lastRuneSize := utf8.DecodeLastRuneInString(word)
	//return word[:len(word)-lastRuneSize]
	var x = []rune(word)

	return string(x[1 : len(x)-1])
}
