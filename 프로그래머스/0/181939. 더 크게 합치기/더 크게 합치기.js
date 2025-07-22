function solution(a, b) {
const fir = String(a)
const sec = String(b)
const sum1 = Number(fir+sec)
const sum2 = Number(sec+fir)
 if(sum1 > sum2) {
    return sum1   
 } else if(sum1 < sum2){
     return sum2
 }

    return sum1
}