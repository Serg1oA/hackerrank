// URL: https://www.hackerrank.com/challenges/js10-template-literals/

function sides(literals, ...expressions) {
    const area = expressions[0]
    const perimeter = expressions[1]

    const s = perimeter / 2   // P = 2 * (l + w) => P/2 = l + w

    const discriminant = Math.sqrt(s * s - 4 * area)
    
    let s1 = (s + discriminant) / 2
    let s2 = (s - discriminant) / 2

    if (s1 > s2) {
        return [s2, s1]
    } else {
        return [s1, s2]
    }
}
