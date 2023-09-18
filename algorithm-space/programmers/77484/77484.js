function solution(lottos, win_nums) {
    let answer = [];

    answer.push( lottos.filter( number => win_nums.includes(number)).length )

    answer.push( answer[0] + lottos.filter( number => number === 0 ).length )

    answer = answer.map( num => {
        if(num === 6) return 1;
        else if(num === 5) return 2;
        else if(num === 4) return 3;
        else if(num === 3) return 4;
        else if(num === 2) return 5;
        else return 6;
    });

    return answer.reverse();
}