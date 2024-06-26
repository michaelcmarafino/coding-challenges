package kata

func SquareSum(numbers []int) (total int) {
	for _, num := range numbers {
		total += num * num
	}
	return total
}
