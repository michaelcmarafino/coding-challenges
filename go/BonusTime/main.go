package kata

import (
	"fmt"
)

func BonusTime(salary int, bonus bool) string {
	if bonus {
		salary *= 10
	}
	//return "£" + strconv.Itoa(salary)
	return fmt.Sprintf("£%d", salary)
}
