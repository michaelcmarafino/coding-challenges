package kata

func CountSheeps(numbers []bool) (total int) {
	for _, sheep := range numbers {
		if sheep {
			total++
		}
	}
	return total
}
