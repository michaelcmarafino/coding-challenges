package kata

import "sort"

func ExpressionMatter(a int, b int, c int) (result int) {
	mySlice := []int{(a + b) * c, a * (b + c), a * b * c, a + b + c}
	sort.Ints(mySlice)
	return mySlice[len(mySlice)-1]
}
