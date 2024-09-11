package kata

func GetMiddle(s string) string {
	size := len(s) / 2

	if len(s)%2 == 0 {
		return s[size-1 : size+1]
	}
	return s[size : size+1]
}
