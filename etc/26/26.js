function isTriangle(...arr) {
    // check number

    const maxValue = Math.max(...arr);

    const rest = arr.filter(num => num !== maxValue);

    return maxValue < rest[0] + rest[1];
}

console.log(isTriangle(2, 4, 6));
console.log(isTriangle(3, 4, 5));
