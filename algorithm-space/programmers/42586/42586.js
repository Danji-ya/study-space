function solution(progresses, speeds) {
    var answer = [];
    let restDay = [];

    progresses.map((job, idx) => restDay.push(Math.ceil((100 - job) / speeds[idx])));

    console.log(restDay)
    while (restDay.length > 0) {
        let count = 1;
        for (let i = 1; i < restDay.length; i++) {

            //앞 진도보다 작거나 같을 때
            if (restDay[0] >= restDay[i]) count++;
            else break;
        }

        // 배포된 기능 배열에서 제거 
        restDay.splice(0, count);
        answer.push(count);
    }


    return answer;
}