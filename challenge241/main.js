// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// get an array of strings, will have the words 'good' or 'bad' in them
// return a string based on how many strings 'good' there are
// ['good', 'bad', 'bad'] => 'Publish!'
// ['good', 'good', 'good', 'bad'] => 'I smell a series!'
// ['bad'] => 'Fail!'

function well(x) {
    let total = x.reduce((acc, c) => acc + (c === "good"), 0)
    // let total = x.filter(el => el === "good").length
    if (total > 2) {
        return "I smell a series!"
    } else if (total === 2 || total === 1) {
        return "Publish!"
    } else {
        return "Fail!"
    }
}
