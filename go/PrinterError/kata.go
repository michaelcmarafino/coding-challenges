package kata

import "fmt"

func PrinterError(s string) string {
	errors := 0
	for _, char := range s {
		if char > 'm' {
			errors++
		}
	}
	return fmt.Sprintf("%d/%d", errors, len(s))
}
