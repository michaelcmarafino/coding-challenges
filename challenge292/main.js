// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// get a string with all lowercase letters, no spaces or any funny biz or funny characters, never an empty string
// return a string of three options: Let's fight again!, Left side win!, Right side wins!
//

// have an array of the letters that have point values, split into left and right side
function alphabetWar(fight) {
    let left = ["s", "b", "p", "w"]
    let right = ["z", "d", "q", "m"]
    let leftSum = 0
    let rightSum = 0
    fight
        .split("")
        .forEach(el =>
            left.includes(el)
                ? (leftSum += left.indexOf(el) + 1)
                : right.includes(el)
                ? (rightSum += right.indexOf(el) + 1)
                : null
        )
    if (rightSum > leftSum) {
        return "Right side wins!"
    } else if (leftSum > rightSum) {
        return "Left side wins!"
    } else {
        return "Let's fight again!"
    }
}

console.log(alphabetWar("zzzzs"))
