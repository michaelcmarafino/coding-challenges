//package kata

//import "strings"

//func DNAStrand(dna string) string {
//var sb strings.Builder
//for _, v := range dna {
//switch string(v) {
//case "G":
//sb.WriteString("C")
//case "C":
//sb.WriteString("G")
//case "A":
//sb.WriteString("T")
//case "T":
//sb.WriteString("A")
//}
//}
//return sb.String()
//}

package kata

import "strings"

var r *strings.Replacer = strings.NewReplacer(
	"A", "T",
	"T", "A",
	"C", "G",
	"G", "C",
)

func DNAStrand(dna string) string {
	return r.Replace(dna)
}
