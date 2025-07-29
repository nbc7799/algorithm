function solution(numbers, n) {
    let answer = 0;
    let list = numbers.length
    for(let i=0; i < list; i++) {
        answer += numbers[i]
      if(answer > n) {
        return answer
       
      }
    }
        return answer
    
}