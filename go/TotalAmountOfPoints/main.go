package kata

func Points(games []string) (total int) {
	for _, v := range games {
		if v[0] > v[2] {
			total += 3
		} else if v[0] == v[2] {
			total += 1
		}
	}
	return
}
