function solution(record) {
    const answer = [];
    const map = new Map();

    record.map(state => {
        const curState = state.split(' ');

        if (curState[0] === 'Enter') {
            answer.push([curState[1], '님이 들어왔습니다.']);
        } else if (curState[0] === 'Leave') {
            // 떠날 땐 안바꿈.
            answer.push([curState[1], '님이 나갔습니다.']);
            return;
        }

        map.set(curState[1], curState[2]);
    });

    return answer.map(state => map.get(state[0]) + state[1]);
}
