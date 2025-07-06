// URL: https://www.hackerrank.com/challenges/30-operators/

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let meal = meal_cost
    let tip = meal * tip_percent / 100
    let tax = meal * tax_percent / 100
    console.log( Math.round(meal + tip + tax) )
}
