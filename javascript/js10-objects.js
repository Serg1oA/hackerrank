// URL: https://www.hackerrank.com/challenges/js10-objects/

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: a+a+b+b,
        area: a*b
    }
}
