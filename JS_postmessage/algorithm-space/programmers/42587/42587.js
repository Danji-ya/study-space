function solution(priorities, location) {
    let answer = 0;

    while (1) {
        const front = priorities.shift();
        location -= 1;

        // 꺼낸것보다 높은게 존재시
        if (priorities.filter(prior => prior > front).length !== 0) {
            priorities.push(front);

            if (location < 0) location = priorities.length - 1;
        } else {
            answer += 1;
            if (location < 0) return answer;
        }
    }
}
