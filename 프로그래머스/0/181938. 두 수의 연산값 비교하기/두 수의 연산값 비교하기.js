function solution(a, b) {
    const sum = Number(`${a}${b}`)
    const product = 2*a*b
    const result = sum > product
    ? sum
    : product > sum
    ? product
    : sum;
    
    return result
}