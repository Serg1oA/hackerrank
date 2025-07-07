// URL: https://www.hackerrank.com/challenges/js10-bitwise/

function getMaxLessThanK(n, k) {
    let maxAndValue = 0

    // Iterate through all possible values of B
    for (let B = 2; B <= n; B++) {
        // Iterate through all possible values of A, where A < B
        for (let A = 1; A < B; A++) {
            const currentAnd = A & B   // Bitwise AND operation
            
            // Check if the currentAnd is less than K and greater than the current max
            if (currentAnd < k && currentAnd > maxAndValue) {
                maxAndValue = currentAnd
            }
        }
    }
    return maxAndValue
}
