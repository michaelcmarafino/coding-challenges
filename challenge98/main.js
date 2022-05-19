// Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

// initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

// sort(initialArray, sortingArray) => ['z', 'x', 'y']

// sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

// Parameters => 2 arrays, initialArr and then array of how it should be sorted
// Return => initialArray sorted in the order of the sortingArray
// [1, 2, 3, 5]  [0, 3, 1, 2]  => [1, 5, 2, 3]

function sort(initialArray, sortingArray) {
    initialArray.map((_, i) => initialArray[sortingArray.indexOf(i)])
}
