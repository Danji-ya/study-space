function solution(n, lost, reserve) {
    let answer = n - lost.length;

    // 잃어버렸지만 여분이 있는 친구
    lost = lost.filter(lostNum => {
        const lostButReserveIdx = reserve.findIndex(
            reserveNum => reserveNum === lostNum,
        );

        if (lostButReserveIdx === -1) {
            return lostNum;
        }
        // lost이면서 reserve이면 reserve에서 제외
        reserve.splice(lostButReserveIdx, 1);
        answer++;
    });

    // 이제 진짜 잃어버린 친구만 (위에서 lost와 reserve에 둘다 존재는 제거됨)
    lost.filter(lostNum => {
        const lostIdx = reserve.findIndex(
            reserveNum => Math.abs(lostNum - reserveNum) === 1,
        );

        if (lostIdx === -1) {
            return lostNum;
        }
        reserve.splice(lostIdx, 1);
        answer++;
    });

    return answer;
}
