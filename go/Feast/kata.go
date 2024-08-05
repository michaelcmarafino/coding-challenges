package kata

func Feast(beast string, dish string) bool {
	return dish[0] == beast[0] && dish[len(dish)-1] == beast[len(beast)-1]
}
