function solution(N, stages) {
    let answer;
    const failPer = [];
    let remnant = stages.length;

    for (let i = 1; i <= N; i++) {
        const failNum = stages.filter(stage => stage === i).length;
        failPer.push([i, failNum / remnant]);
        remnant -= failNum;
    }
    failPer.sort((a, b) => b[1] - a[1]);

    answer = [...failPer.map(stage => stage[0])];
    return answer;
}
