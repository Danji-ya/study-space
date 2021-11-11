function solution(s) {
    let sArray = [];
    const set = new Set();
    const answer = [];
    // obj -> array
    s.slice(2, -2)
        .split('},{')
        .map(arr => sArray.push(arr.split(',')));

    // 갯수로 sort
    sArray = sArray.sort((a, b) => a.length - b.length);
    console.log(sArray);
    sArray.map((arr, idx) => {
        if (idx === 0) answer.push(arr[0]);

        for (let i = 0; i < arr.length; i++) {
            if (!answer.includes(arr[i])) answer.push(arr[i]);
        }
    });

    return answer.map(ans => parseInt(ans));
}
