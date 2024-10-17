package main

import (
	"errors"
	"fmt"
	"strings"
)

const (
	NotFound = iota
	Found
	MultipleFound
	DuplicateFound
)

func main() {
	barcodes := []string{"12345", "07045", "02847892047098405794", "=09182345=0974", ";y9kqtw90tkqw", "2471", "", "247224288055", "", "247224288055", "247124282031"}
	// 247124282031  247224288055
	firstBarcode := barcodes[0]
	var scanResult int
	for idx, b := range barcodes {
		if len(b) > 11 && strings.HasPrefix(b, "247") && idx != 1 {
			fmt.Println("Barcode Found:", b)
			if barcodes[0] == barcodes[idx] {
				scanResult = DuplicateFound
				fmt.Println("Duplicate barcode was scanned")
			}

			// Set barcode to first index
			barcodes[0] = barcodes[idx]
			// Set current index barcode to first barcode
			barcodes[idx] = firstBarcode

			if scanResult == Found {
				scanResult = MultipleFound
				break
			}
			scanResult = Found
		}
	}
	if scanResult == NotFound {
		fmt.Println("Barcode NOT Found.")
	} else if scanResult == Found || scanResult == DuplicateFound {
		fmt.Println("Barcode Found and sent to OPC server:", barcodes[0])
	} else if scanResult == MultipleFound {
		fmt.Println(errors.New("Error: Multiple Barcodes found on same scan. Lights go Yellow"))
	}

}
