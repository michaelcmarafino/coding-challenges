// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

// params => an array of integers (can be negative, 0, or positive) and then the second param is the target value

// returns => the indices of two numbers in the first parameter that when added together equal the second parameter, total.  These indices should be in an array (the order of the return value does not matter).

// examples => [1,2,3] ===> [0, 2] or [2, 0]

// function twoSum(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         let secondNum = target - numbers[i]
//         let secondIndex = numbers.findIndex(el => el === secondNum && el !== i)
//         console.log(secondIndex)
//         if (secondIndex !== -1 && secondIndex !== i) {
//             return [i, secondIndex]
//         }
//     }
// }

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length - 1; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j]
        }
    }
}

// console.log(twoSum([2, 2, 3], 4))
