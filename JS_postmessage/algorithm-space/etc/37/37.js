function calcDiff(combination) {
    return combination
        .reduce((acc, cur) => {
            acc[0] *= cur[0];
            acc[1] += cur[1];
            return acc;
        }, [1, 0]);
}

function getCombinations(arr, cnt) {
    let result = [];
    if (cnt === 1) return arr.map(cur => [cur]);

    arr.map((cur, idx, ori) => {

        const restArr = ori.slice(idx + 1);

        const combinations = getCombinations(restArr, cnt - 1);

        const joinArr = combinations.map(combination => [cur, ...combination]);

        result.push(...joinArr);
    });

    return result;
}

function solution(ingredients) {
    let answer = Number.MAX_SAFE_INTEGER;

    // pick 1, 2, 3 ...., N;
    for (let i = 1; i <= ingredients.length; i += 1) {
        const diffList = getCombinations(ingredients, i).map(combination => calcDiff(combination));

        diffList.forEach(arr => {
            const diff = Math.abs(arr[1] - arr[0]);
            answer = diff <= answer ? diff : answer;
        });
    }

    console.log(answer);
}



const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let N;
let cnt = 0;
const ingredients = [];
rl.on("line", function (x) {
    if (!N) {
        return N = +x;
    }
    ingredients.push(x.split(' ').map(el => +el));
    cnt++;
    if (cnt === N) rl.close();
}).on("close", function () {
    solution(ingredients);
    process.exit();
});