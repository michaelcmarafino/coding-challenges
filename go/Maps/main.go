package kata

func Maps(x []int) []int {
	ans := make([]int, len(x))
	for i, num := range x {
		ans[i] = num + num
	}
	return ans
}
