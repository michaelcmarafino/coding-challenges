package kata

import "fmt"

func Greet(name string) string {
	if name == "Johnny" {
		return fmt.Sprint("Hello, my love!")
	}
	return fmt.Sprintf("Hello, %v!", name)
}
