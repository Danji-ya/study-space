function solution(n) {
    let answer = 0;

    const arr = Array.from(new Array(n + 1), (v, i) => i);
    arr[0] = false;
    arr[1] = false;

    for (let i = 2; i <= n; i += 1) {
        if (!arr[i]) continue;

        for (let j = i + i; j <= n; j += i) {
            arr[j] = false;
        }
    }

    answer = arr.filter(num => num).length;

    return answer;
}
