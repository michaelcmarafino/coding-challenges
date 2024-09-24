//At the end of the first year there will be:
//1000 + 1000 * 0.02 + 50 => 1070 inhabitants

//At the end of the 2nd year there will be:
//1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

//At the end of the 3rd year there will be:
//1141 + 1141 * 0.02 + 50 => 1213

//It will need 3 entire years.

// p0 is starting population
// percent is percent of increase each year
// aug is the numbe of people coming or leaving each year
// p is the goal

package kata

func NbYear(p0 int, percent float64, aug int, p int) int {
	var result int
	for p0 < p {
		p0 = p0 + int(float64(p0)*percent/100) + aug
		result += 1
	}
	return result
}
