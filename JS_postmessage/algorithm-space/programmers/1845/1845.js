function solution(nums) {
    let answer = nums.length / 2;
    const uniqueArray = [...new Set(nums)];

    if (answer > uniqueArray.length) answer = uniqueArray.length;

    return answer;
}
