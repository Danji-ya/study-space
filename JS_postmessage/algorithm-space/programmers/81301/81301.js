function solution(s) {
    const num = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };

    for (const key in num) {
        const regExp = new RegExp(key, 'g');
        if (s.includes(key)) {
            s = s.replace(regExp, num[key]);
        }
    }

    return parseInt(s, 10);
}
