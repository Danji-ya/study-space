function solution(n) {
    var answer = '';
    let dictionary = {
        1: '1',
        2: '2',
        0: '4',
    };
    
    while( n > 0 ){       
        answer = dictionary[n%3] + answer;
        n = (n % 3 === 0) ? n/3 - 1 : Math.floor(n/3); 
    }

    return answer;
}