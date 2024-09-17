package kata

func GetSum(a, b int) int {
	var min, max, sum int
	if a > b {
		min, max = b, a
	} else {
		min, max = a, b
	}

	for i := min; i <= max; i++ {
		sum += i
	}
	return sum
}
