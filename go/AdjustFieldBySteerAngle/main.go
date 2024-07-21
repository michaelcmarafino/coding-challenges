package main

import "fmt"

func main() {
	initialAgvAngleInc := 0
	endAgvAngleInc := 270
	fmt.Println("INCREASING ANGLE")

	for i := initialAgvAngleInc; i <= endAgvAngleInc; i++ {
		fieldExtended := ExtendFieldBySteerAngle(initialAgvAngleInc, i, endAgvAngleInc-initialAgvAngleInc, 10, mid)
		fmt.Printf("At %v degrees, field is extended: %v\n", i, fieldExtended)
	}
	fmt.Println("////////////////////////////////////")
	fmt.Println("")

	initialAgvAngleDec := 360
	endAgvAngleDec := 270
	fmt.Println("DECREASING ANGLE")

	for j := initialAgvAngleDec; j >= endAgvAngleDec; j-- {
		fieldExtended := ExtendFieldBySteerAngle(initialAgvAngleDec, j, initialAgvAngleDec-endAgvAngleDec, 10, mid)
		fmt.Printf("At %v degrees, field is extended: %v\n", j, fieldExtended)

	}
	fmt.Println("////////////////////////////////////")
	fmt.Println("")
}

const (
	end = iota
	mid
	beg
)

func ExtendFieldBySteerAngle(initialAngle, currentAngle, degreesInTurn, degreeAmountToExtend, whereToExtendInTurn int) bool {
	var endAngle int
	var angleIncreasing, angleDecreasing bool

	if currentAngle < initialAngle || (initialAngle < 5 && currentAngle > 270) {
		angleDecreasing = true
		angleIncreasing = false
		if initialAngle == 0 {
			initialAngle = 360
		}
		endAngle = initialAngle - degreesInTurn
	} else if currentAngle > initialAngle {
		angleIncreasing = true
		angleDecreasing = false
		endAngle = degreesInTurn + initialAngle
	} else {
		angleDecreasing = false
		angleIncreasing = false
	}
	switch whereToExtendInTurn {
	case end:
		if angleIncreasing && currentAngle >= endAngle-degreeAmountToExtend {
			return true
		} else if angleDecreasing && currentAngle <= endAngle+degreeAmountToExtend {
			return true
		}
	case mid:
		if angleIncreasing && (currentAngle >= (initialAngle+((degreesInTurn/2)-(degreeAmountToExtend/2))) && currentAngle <= (initialAngle+((degreesInTurn/2)+(degreeAmountToExtend/2)))) {
			return true
		} else if angleDecreasing && (currentAngle >= (endAngle+((degreesInTurn/2)-(degreeAmountToExtend/2))) && currentAngle <= (endAngle+((degreesInTurn/2)+(degreeAmountToExtend/2)))) {
			return true
		}
	case beg:
		if angleIncreasing && currentAngle <= initialAngle+degreeAmountToExtend {
			return true
		} else if angleDecreasing && currentAngle >= initialAngle-degreeAmountToExtend {
			return true
		}
	}
	return false
}
