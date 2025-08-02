function solution(myString, pat) {
    let answer = [...myString].map(ch => ch === 'A' ? 'B' : 'A').join("")
    
    
    
    return answer.includes(pat) ? 1 : 0
}