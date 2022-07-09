// Karan's company makes software that provides different features based on the version of operating system of the user.

// For finding which version is more recent, Karan uses the following method:

// function compareVersions (version1, version2) {
//   return parseFloat(version1) >= parseFloat(version2);
// }
// While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.

// Karan's function fails for the new version:

// compareVersions ("10.9", "10.10");       // returns true, while it should return false
// Karan now wants to spend some time to right a more robust version comparison function that works for any future version/sub-version updates.

// Help Karan write this function. Here are a few sample cases:

// compareVersions("11", "10");                    // returns true
// compareVersions("11", "11");                    // returns true
// compareVersions("10.4.6", "10.4");              // returns true
// compareVersions("10.4", "11");                  // returns false
// compareVersions("10.4", "10.10");               // returns false
// compareVersions("10.4.9", "10.5");              // returns false
// It can be assumed that version strings are non empty and only contain numeric literals and the character '.'.

// takes in two arguments (parameters are version1 and version2) that are strings but of floats

// returns true when version1 is a newer version of the software, otherwise it is false

// "11", "10" => true

function compareVersions(version1, version2) {
    // split number of type string into individual elements of an array
    // let template = version => version.split(".")
    let v1Arr = version1.split(".").map(el => (el.length === 2 ? el : "0" + el))
    let v2Arr = version2.split(".").map(el => (el.length === 2 ? el : "0" + el))
    // join the second and third element of the array
    if (v1Arr.length > 2) {
        v1Arr[1] = v1Arr[1] + v1Arr[2]
        v1Arr.pop()
    }
    if (v2Arr.length > 2) {
        v2Arr[1] = v2Arr[1] + v2Arr[2]
        v2Arr.pop()
    }

    //then join the two elements with a "."

    // then compare and get true or false

    // .map(el => (el.length === 2 ? el : "0" + el))
    // .join("")
    // return template(version1)
    return v1Arr.join(".") >= v2Arr.join(".")
    // return [version1, version2].reduce((acc, c, i) => {
    //   const length = acc.length > c.length ? acc.length : c.length

    // })
}

const compareVersions = (v1, v2) => {
    const a1 = v1.split(".").map(Number)
    const a2 = v2.split(".").map(Number)
    for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
        let n1 = a1[i] || 0,
            n2 = a2[i] || 0
        if (n1 === n2) continue
        return n1 > n2 ? true : false
    }
    return true
}

console.log(compareVersions("1.15", "11.5"))
