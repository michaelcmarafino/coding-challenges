package main

func FindMultiples(integer, limit int) (result []int) {
	for i := integer; i <= limit; i += integer {
		result = append(result, i)
	}
	return
}
