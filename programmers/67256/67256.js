function solution(numbers, hand) {
    let answer = '';
    const keyPad = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2],
    };
    let leftHand = '*';
    let rightHand = '#';

    const leftMove = num => {
        leftHand = num;
        answer += 'L';
    };

    const rightMove = num => {
        rightHand = num;
        answer += 'R';
    };

    const calculationDistance = (lh, rh, num) => {
        const isLeftHended = hand === 'left';

        const ldis =
            Math.abs(keyPad[lh][0] - keyPad[num][0]) +
            Math.abs(keyPad[lh][1] - keyPad[num][1]);
        const rdis =
            Math.abs(keyPad[rh][0] - keyPad[num][0]) +
            Math.abs(keyPad[rh][1] - keyPad[num][1]);

        if (ldis > rdis) {
            rightMove(num);
        } else if (ldis < rdis) {
            leftMove(num);
        } else {
            isLeftHended ? leftMove(num) : rightMove(num);
        }
    };

    numbers.map(num => {
        if (num % 3 === 1) {
            return leftMove(num);
        }
        if (num % 3 === 0 && num !== 0) {
            return rightMove(num);
        }
        return calculationDistance(leftHand, rightHand, num);
    });

    return answer;
}
