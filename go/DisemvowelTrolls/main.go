package kata

import "strings"

func Disemvowel(comment string) string {
	//var sb strings.Builder
	//for _, v := range comment {
	//if strings.ContainsRune("aeiouAEIOU", v) == false {
	//sb.WriteRune(v)
	//}
	//}
	//return sb.String()

	for _, v := range "aeiouAEIOU" {
		comment = strings.ReplaceAll(comment, string(v), "")
	}
	return comment
}
