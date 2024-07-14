package kata

func ReverseSeq(n int) []int {
	numbers := make([]int, n)
	for i := range numbers {
		numbers[i] = n - i
	}
	return numbers
}
