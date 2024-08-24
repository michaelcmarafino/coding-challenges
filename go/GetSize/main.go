package kata

func GetSize(w, h, d int) [2]int {
	area := 2*d*w + 2*d*h + 2*w*h
	volume := d * w * h
	return [2]int{area, volume}
}
