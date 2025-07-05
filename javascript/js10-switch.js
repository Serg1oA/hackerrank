// URL: https://www.hackerrank.com/challenges/js10-switch

function getLetter(s) {
    let letter
    const firstChar = s[0].toLowerCase()

    switch (true) {
        case "aeiou".includes(firstChar):
            letter = "A"
            break
        case "bcdefg".includes(firstChar):
            letter = "B"
            break
        case "hjklm".includes(firstChar):
            letter = "C"
            break
        case "npqrstvwxyz".includes(firstChar):
            letter = "D"
            break
        default:
            letter = "Unknown"
            break
    }
    return letter
}
