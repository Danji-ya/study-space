const rgbMap = {
    bg: 'R',
    br: 'G',
    gr: 'B',
};

function getRGB(str) {
    return rgbMap[
        str
            .split('')
            .map(c => c.toLowerCase())
            .sort()
            .join('')
    ];
}

function triangle(row) {
    let answer = '';
    let curRow = row;

    for (let i = 0; i < row.length; i += 1) {
        if (i === row.length - 1) answer = curRow;

        let newRow = '';

        // calc rgb
        for (let j = 0; j < curRow.length - 1; j += 1) {
            if (curRow[j] === curRow[j + 1]) {
                newRow += curRow[j];
            } else {
                newRow += getRGB(curRow.slice(j, j + 2));
            }
        }

        curRow = newRow;
    }
    return answer;
}

console.log(triangle('RBRGB'));
console.log(triangle('RRGBRGBB'));
