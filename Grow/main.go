package kata

func Grow(arr []int) int {
	total := arr[0]
	for _, num := range arr[1:] {
		total *= num
	}
	return total
}
