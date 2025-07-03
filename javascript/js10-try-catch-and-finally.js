// URL: https://www.hackerrank.com/challenges/js10-try-catch-and-finally/

function reverseString(s) {
    if (typeof s == "string") {
        let newStr = s.split("").reverse().join("")
        console.log(newStr)
    } else {
        console.log("s.split is not a function")
        console.log(s)
    }
}
