// URL: https://www.hackerrank.com/challenges/js10-arrays/

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    
    let unique = [...new Set(nums)]
    let ordered = [...unique].sort((a,b)=>a-b)
    
    return ordered[ordered.length-2]
    
}
