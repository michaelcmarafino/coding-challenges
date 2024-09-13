//package kata

//import "strings"

//func Accum(s string) string {
//var sb strings.Builder

//for i, v := range s {
//sb.WriteString(strings.ToUpper(string(v)))
//if i > 0 {
//for j := 1; j < (i + 1); j++ {
//sb.WriteString(strings.ToLower(string(v)))
//}
//}
//sb.WriteString("-")
//}
//finalStr := sb.String()
//return finalStr[:len(finalStr)-1]
//}

package kata

import "strings"

func Accum(s string) string {
	words := make([]string, len(s))

	for i := 0; i < len(s); i++ {
		words[i] = strings.ToUpper(string(s[i])) + strings.Repeat(strings.ToLower(string(s[i])), i)
	}

	return strings.Join(words, "-")
}
