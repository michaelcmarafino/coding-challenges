package kata

func Between(a, b int) []int {
	result := make([]int, b-a+1)
	for i := 0; i < b-a+1; i++ {
		result[i] = a + i
	}
	return result
}
