function solution(numbers) {
    let answer = '';
    
    numbers = numbers.sort( (a,b) => {
        //원소는 0~1000
        return b.toString().repeat(4).slice(0,4) - a.toString().repeat(4).slice(0,4);
    });
    
    numbers.map( num => answer+=num.toString());
    
    return answer[0]==='0'? '0' : answer;
}