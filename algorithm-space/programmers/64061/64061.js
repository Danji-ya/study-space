function solution(board, moves) {
    let answer = 0;
    const myStack = [];

    moves.map(position => {
        for (let i = 0; i < board.length; i++) {
            // 집을게 존재
            if (board[i][position - 1]) {
                // stack이 비어있는지 판단
                if (myStack.length !== 0) {
                    if (
                        myStack[myStack.length - 1] === board[i][position - 1]
                    ) {
                        myStack.pop();
                        answer += 2;
                    } else {
                        myStack.push(board[i][position - 1]);
                    }
                } else {
                    myStack.push(board[i][position - 1]);
                }

                board[i][position - 1] = 0;
                break;
            }
        }
    });

    return answer;
}
