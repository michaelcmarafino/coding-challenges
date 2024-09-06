package kata

func Well(x []string) string {
	sum := 0
	for _, v := range x {
		if v == "good" {
			sum++
		}
	}

	switch sum {
	case 0:
		return "Fail!"
	case 1, 2:
		return "Publish!"
	default:
		return "I smell a series!"
	}
}
