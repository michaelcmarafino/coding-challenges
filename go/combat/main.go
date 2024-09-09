package kata

func combat(health, damage float64) float64 {
	result := health - damage
	if result < 0 {
		return 0
	}
	return result
}
