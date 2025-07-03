// URL: https://www.hackerrank.com/challenges/js10-loops/

function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"]
    
    // console.log vowels
    for (let letter of s) {
        if (vowels.includes(letter)) {
            console.log(letter)
        }
    }
    
    // console.log what's not a vowel
    for (let letter of s) {
        if (!vowels.includes(letter)) {
            console.log(letter)
        }
    }
}
