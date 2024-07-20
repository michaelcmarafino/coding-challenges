package kata

import "strings"

func FakeBin(x string) (result string) {
	for _, char := range x {
		if char < '5' {
			result += "0"
		} else {
			result += "1"
		}
	}
	return result
}

func FakeBinTwo(x string) (result string) {
	b := []byte(x)
	for i, v := range b {
		if v < '5' {
			b[i] = '0'
		} else {
			b[i] = '1'
		}
	}
	return string(b)
}

func FakeBinThree(x string) (result string) {
	res := strings.NewReplacer("1", "0", "2", "0", "3", "0", "4", "0", "5", "1", "6", "1", "7", "1", "8", "1", "9", "1")
	result = res.Replace(x)
	return
}
