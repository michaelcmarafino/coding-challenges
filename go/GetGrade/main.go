package kata

func GetGrade(a, b, c int) rune {
	grade := (a + b + c) / 3
	switch {
	case grade >= 90:
		return 'A'
	case grade >= 80:
		return 'B'
	case grade >= 70:
		return 'C'
	case grade >= 60:
		return 'D'
	default:
		return 'F'
	}
}
