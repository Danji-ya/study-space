const addBonus = (score, bonus) => {
    if (bonus === "S") return Math.pow(score, 1);
    if (bonus === "D") return Math.pow(+score, 2);
    if (bonus === "T") return Math.pow(+score, 3);
};

function solution(dartResult) {
    const regexp1 = /[*#]/;
    let cuttingStr = [];
    let scores = [];

    dartResult = dartResult.split('');

    while (dartResult.length !== 0) {
        // 숫자가 10일때 고려
        if (dartResult[0] === '1' && dartResult[1] === '0') {
            dartResult.splice(0, 2);
            dartResult.unshift('10');
        }

        if (regexp1.test(dartResult[2])) {
            cuttingStr.push(dartResult.slice(0, 3));
            dartResult.splice(0, 3);

        } else {
            cuttingStr.push(dartResult.slice(0, 2));
            dartResult.splice(0, 2);
        }
    }

    cuttingStr.map((stage, idx) => {
        let bonus = addBonus(parseInt(stage[0]), stage[1]);

        if (stage[2] === '*') {
            //전 단계도 * 일 때,
            //현재가 제일 첫번째 일 떄,
            if (scores.length === 0) scores.push(bonus * 2);
            else {
                scores.push(scores.pop() * 2);
                scores.push(bonus * 2);
            }

        } else if (stage[2] === '#') {
            scores.push(-bonus);

        } else {
            scores.push(bonus);
        }
    });

    return scores.reduce((acc, cur) => acc += cur);
}