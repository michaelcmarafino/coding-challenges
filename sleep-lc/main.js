// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

/**
 * @param {number} millis
 */
async function sleep(millis) {
    //await new Promise((resolve) => setTimeout(resolve, millis))

    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo")
        }, millis)
    })

    await promise1
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
sleep(200).then(() => console.log(Date.now() - t)) // 200
