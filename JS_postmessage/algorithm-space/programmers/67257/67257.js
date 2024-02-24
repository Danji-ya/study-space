function solution(expression) {
    const answer = [];
    const prioritys = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '+', '-'],
        ['*', '-', '+'],
    ];

    const operators = expression.split(/[0-9]/).filter(oper => oper !== '');
    const numbers = expression.split(/[^0-9]/).map(num => parseInt(num));
    const newArray = [];

    const calculator = (operator, num1, num2) => {
        if (operator === '+') return num1 + num2;
        if (operator === '-') return num1 - num2;
        if (operator === '*') return num1 * num2;
    };

    // 숫자와 수식으로 새롭게 배열
    numbers.map((num, idx) => {
        newArray.push(num);
        // 마지막은 부호가 존재x
        if (numbers.length - 1 > idx) newArray.push(operators[idx]);
    });

    prioritys.map(priority => {
        // 배열 사본
        const resetArr = newArray.slice();

        for (let i = 0; i < priority.length; i++) {
            while (resetArr.includes(priority[i])) {
                const operatorIdx = resetArr.indexOf(priority[i]);
                const result = calculator(
                    resetArr[operatorIdx],
                    resetArr[operatorIdx - 1],
                    resetArr[operatorIdx + 1],
                );
                resetArr.splice(operatorIdx - 1, 3, result);
            }
        }
        answer.push(...resetArr);
    });

    return Math.max(...answer.map(num => Math.abs(num)));
}
