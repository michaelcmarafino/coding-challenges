package kata

func CountBy(x, n int) []int {
	ans := make([]int, n)
	for i := 0; i < n; i++ {
		ans[i] = x * (i + 1)
	}
	return ans
}
