package kata

import "sync"

func Merge(c ...chan string) <-chan string {
	out := make(chan string)
	var wg sync.WaitGroup
	wg.Add(len(c))

	//worker := func(ch <-chan string) {
	//defer wg.Done()
	//for n := range ch {
	//out <- n
	//}
	//}

	//for _, v := range c {
	//go worker(v)
	//}

	for i := range c {
		go func(i int) {
			defer wg.Done()
			for v := range c[i] {
				out <- v
			}
		}(i)
	}

	go func() {
		wg.Wait()
		close(out)
	}()

	return out
}
