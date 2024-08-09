package kata

import "sort"

//import "slices"

func MergeArrays(arr1, arr2 []int) []int {
	result := append(arr1, arr2...)
	// Sort slice
	//slices.Sort(result)
	//return slices.Compact(result)

	// Sort slice
	//for j := 0; j < len(result)-1; j++ {
	//if result[j] > result[j+1] {
	//for i := 0; i < len(result)-1; i++ {
	//if result[i] < result[i+1] {
	//continue
	//} else if result[i] > result[i+1] {
	//temp := result[i]
	//result[i] = result[i+1]
	//result[i+1] = temp
	//for n := i; n > 0; n-- {
	//if result[n] > result[n-1] {
	//break
	//} else if result[n] < result[n-1] {
	//temp := result[n]
	//result[n] = result[n-1]
	//result[n-1] = temp
	//}
	//}
	//}
	//}
	//}
	//}

	// Sort slice
	sort.Ints(result)

	// Remove duplicate int from slice
	allKeys := make(map[int]bool)
	answer := []int{}
	for _, num := range result {
		if _, value := allKeys[num]; !value {
			allKeys[num] = true
			answer = append(answer, num)
		}
	}

	return answer
}
