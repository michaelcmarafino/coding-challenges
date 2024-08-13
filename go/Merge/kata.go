package kata

import "sync"

func Merge(a <-chan string, b <-chan string) <-chan string {
	out := make(chan string)
	var wg sync.WaitGroup

	// helper function to read from a channel and send to output channel
	worker := func(c <-chan string) {
		defer wg.Done()
		for n := range c {
			out <- n
		}
	}

	// Add before launching goroutines
	wg.Add(2)

	// start the goroutines
	go worker(a)
	go worker(b)

	// close the output channel once all workers are done
	go func() {
		wg.Wait()
		close(out)
	}()

	return out
}
