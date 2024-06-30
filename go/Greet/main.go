package kata

import "fmt"

func Greet(name string) string {
	//return "Hello, " + name + " how are you doing today?"

	return fmt.Sprintf("Hello, %s how are you doing today?", name)
}
