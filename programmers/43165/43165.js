function solution(numbers, target) {
    let answer = 0;

    const findTarget = (depth, acc) => {      
        // 끝까지 왔을 때
        if(depth === numbers.length){
            if(acc === target) answer+=1;    
            return;
        }        
        findTarget(depth + 1, acc + numbers[depth]);
        findTarget(depth + 1, acc - numbers[depth]);
    } 
    findTarget(0, 0);
    
    return answer;
}