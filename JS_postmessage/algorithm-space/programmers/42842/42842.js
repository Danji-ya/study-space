function solution(brown, yellow) {
    const restNumber = (brown - 4) / 2;

    const findCarpetSize = restNumber => {
        for (let i = 1; i <= restNumber; i++) {
            for (let j = 1; j <= restNumber; j++) {
                if (i + j === restNumber && i >= j) {
                    if (i * j === yellow) return [i + 2, j + 2];
                }
            }
        }
    };

    const [x, y] = findCarpetSize(restNumber);

    return [x, y];
}
