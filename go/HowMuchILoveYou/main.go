package kata

func HowMuchILoveYou(i int) (result string) {
	switch i % 6 {
	case 1:
		result = "I love you"
	case 2:
		result = "a little"
	case 3:
		result = "a lot"
	case 4:
		result = "passionately"
	case 5:
		result = "madly"
	default:
		result = "not at all"
	}
	return
}
