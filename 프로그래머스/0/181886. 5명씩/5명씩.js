
function solution(names) {
    let answer = [];
    for(let i =0; i < names.length; i += 5) {
        const chunk = names.slice(i, i+5);
        if(chunk.length > 0) {
            answer.push(chunk[0])
        }
    }
    
    return answer;
}
