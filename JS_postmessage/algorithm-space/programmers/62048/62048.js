function solution(w, h) {

    let gcd;

    const getGcd = (max, min) => {
        let R;  
        // 유클리드 a>b 조건
        if(max < min){
            let temp = max;
            max = min;
            min = temp;
        }
    
        while(max % min > 0){
            R = max % min;
            max = min;
            min = R;
        }
        return min;
    };

    gcd = getGcd(w, h);


    return w*h - ( (w/gcd + h/gcd -1) * gcd );
}