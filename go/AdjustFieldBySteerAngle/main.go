package main

import "fmt"

func main() {
	initialAgvAngle := 270
	endAgvAngle := 180
	for i := initialAgvAngle; i >= endAgvAngle; i-- {
		fieldExtended := ExtendFieldBySteerAngle(initialAgvAngle, i, 90, 10, beg)
		fmt.Printf("At %v degrees, field is extended: %v\n", i, fieldExtended)
	}
}

const (
	end = iota
	mid
	beg
)

var angleIncreasing, angleDecreasing bool

func ExtendFieldBySteerAngle(initialAngle, currentAngle, degreesInTurn, degreeAmountToExtend, whereToExtendInTurn int) bool {
	if currentAngle > initialAngle {
		angleIncreasing = true
		angleDecreasing = false
		endAngle := degreesInTurn + initialAngle
	} else if currentAngle < initialAngle || (initialAngle == 0 && currentAngle <= 1){
		angleDecreasing = true
		angleIncreasing = false
		if initialAngle == 0 {
			initialAngle = 360
		}
		endAngle := initialAngle - degreesInTurn
	} else {
		angleDecreasing = false
		angleIncreasing = false
	}
	switch whereToExtendInTurn {
	case end:
		if angleIncreasing && currentAngle >= endAngle-degreeAmountToExtend {
			return true
		} else if angleDecreasing && currentAngle <= 
	case mid:
		if angleIncreasing && (currentAngle >= degreesInTurn/2-degreeAmountToExtend/2 || currentAngle <= degreesInTurn/2+degreeAmountToExtend/2) {
			return true
		}
	case beg:
		if angleIncreasing && currentAngle <= initialAngle+degreeAmountToExtend {
			return true
		}
	}
	return false
}
