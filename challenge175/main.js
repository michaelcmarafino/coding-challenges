// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all.

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
    return dna
        .split("")
        .map(el => {
            if (el === "A") return "T"
            if (el === "T") return "A"
            if (el === "G") return "C"
            if (el === "C") return "G"
        })
        .join("")
}

console.log(DNAStrand("ATTGC"))
