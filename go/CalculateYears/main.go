package kata

func CalculateYears(years int) (result [3]int) {
	switch years {
	case 1:
		result = [3]int{1, 15, 15}
	case 2:
		result = [3]int{2, 24, 24}
	default:
		result = [3]int{years, (years-2)*4 + 24, (years-2)*5 + 24}
	}
	return
}
