function solution(numbers) {
    var answer;
    let combination = [];
    
    
    for(let j= 0; j<numbers.length-1; j++){      
        for(let i=j+1; i< numbers.length; i++){
            combination.push(numbers[j] + numbers[i]);
        }    
    }
    
    
    answer = [...new Set(combination)];
    
    return answer.sort((a,b) => a-b);
}