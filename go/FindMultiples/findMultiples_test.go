package main

import (
	"reflect"
	"testing"
)

func TestFindMultiples(t *testing.T) {
	got := FindMultiples(2, 6)
	want := []int{2, 4, 6}

	if reflect.DeepEqual(got, want) {
		t.Errorf("got %q want %q", got, want)
	}
}
