package main

import (
	"fmt"
	"math/rand"
)

func bub_sort(ar [50000]int) [50000]int {
	steps := 0
	for i := 0; i < len(ar); i++ {
		for j := 0; j < len(ar)-(i+1); j++ {
			steps += 1
			if ar[j] > ar[j+1] {
				temp := ar[j]
				ar[j] = ar[j+1]
				ar[j+1] = temp
			}
		}
	}
	fmt.Println("steps: ", steps)
	return ar
}

func main() {
	rand.Seed(42)
	var ar [50000]int
	for i := 0; i < len(ar); i++ {
		ar[i] = rand.Intn(10)
	}
	fmt.Println("Size of array ", len(ar))
	_ = bub_sort(ar)	
}
