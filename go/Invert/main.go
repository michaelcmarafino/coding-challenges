package kata

func Invert(arr []int) []int {
	invertedArr := make([]int, len(arr))
	for i, num := range arr {
		invertedArr[i] = -num
	}
	return invertedArr
}
