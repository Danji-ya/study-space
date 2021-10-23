function solution(nums) {
    let answer = 0;

    const primeCount = arr => {
        arr.map(num => {
            for (let i = 2; i <= num / 2; i += 1) {
                if (num % i === 0) return;
            }
            answer += 1;
        });
    };

    const getCombination = (arr, selectNum) => {
        const result = [];

        if (selectNum === 1) return arr.map(num => [num]);

        arr.map((num, idx, origin) => {
            const restArr = origin.slice(idx + 1);
            const combinations = getCombination(restArr, selectNum - 1);
            const concatArr = combinations.map(combination => [
                num,
                ...combination,
            ]);

            result.push(...concatArr);
        });

        return result;
    };

    const combinations = getCombination(nums, 3);
    const addedList = combinations.map(combination =>
        combination.reduce((acc, cur) => acc + cur, 0),
    );
    primeCount(addedList);

    return answer;
}
