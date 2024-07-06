package main

func Digitize(n int) (ans []int) {
	for {
		ans = append(ans, n%10)
		n /= 10
		if n == 0 {
			return ans
		}
	}
}
