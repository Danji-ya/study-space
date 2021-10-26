function solution(maps) {
    let answer = -1;
    const MAZE_SIZE_X = maps[0].length - 1;
    const MAZE_SIZE_Y = maps.length - 1;
    const myQueue = [];

    const moveAble = (y, x, cnt) => {
        if (x < 0 || y < 0 || x > MAZE_SIZE_X || y > MAZE_SIZE_Y) return;
        if (maps[y][x] === 1) {
            maps[y][x] = 'X';
            myQueue.push([y, x, cnt + 1]);
        }
    };

    // start
    myQueue.push([0, 0, 1]);
    maps[0][0] = 'X';

    while (myQueue.length !== 0) {
        const [y, x, cnt] = myQueue.shift();

        // 도착 시
        if (x === MAZE_SIZE_X && y === MAZE_SIZE_Y) {
            answer = cnt;
            break;
        }

        // 아래
        moveAble(y + 1, x, cnt);
        // 우측
        moveAble(y, x + 1, cnt);
        // 위
        moveAble(y - 1, x, cnt);
        // 왼쪽
        moveAble(y, x - 1, cnt);
    }

    return answer;
}
