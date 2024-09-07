package kata

func multipleOfIndex(ints []int) []int {
	var result []int
	for i := 1; i < len(ints); i++ {
		if ints[i]%i == 0 {
			result = append(result, ints[i])
		}
	}
	return result
}
