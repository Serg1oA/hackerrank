// URL: https://www.hackerrank.com/challenges/30-data-types/

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var int = parseInt(readLine())
    var dou = parseFloat(readLine())
    var str = readLine()
    // Read and save an integer, double, and String to your variables.

    // Print the sum of both integer variables on a new line.
    console.log(i+int)
    // Print the sum of the double variables on a new line.
    console.log((d+dou).toFixed(1))
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s+str)
}
