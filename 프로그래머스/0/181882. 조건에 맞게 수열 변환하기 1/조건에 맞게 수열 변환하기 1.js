function solution(arr) {
    var answer = [];
    
   const newArr = arr.map((n)=>{
        if(n >= 50 && n%2 === 0) {
          return  n / 2
        } else if (n < 50 && n%2 !== 0) {
          return  n * 2
        } else {
            return n
        }
    })
    return answer = newArr
}