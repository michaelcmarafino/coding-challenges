package kata

//func SmallestIntegerFinder(numbers []int) int {
//sort.Ints(numbers)
//return numbers[0]
//}

func SmallestIntegerFinder(numbers []int) int {
	smallest := numbers[0]

	for i := range numbers {
		if numbers[i] < smallest {
			smallest = numbers[i]
		}
	}
	return smallest
}
