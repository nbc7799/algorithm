function solution(a, b) {
    let sum = Number(`${a}${b}`)
    let product = 2*a*b
    const result = sum > product
    ? sum
    : product > sum
    ? product
    : sum;
    
    return result
}