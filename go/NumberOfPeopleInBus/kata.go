package kata

func Number(busStops [][2]int) (inBus int) {
	for _, b := range busStops {
		inBus += b[0] - b[1]
	}
	return
}
