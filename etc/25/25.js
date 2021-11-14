// Palindrome
function strReverse(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    if (str.length % 2 === 0) {
        const [before, after] = [
            str.slice(0, str.length / 2),
            str.slice(str.length / 2),
        ];
        return before === strReverse(after);
    }

    const [before, after] = [
        str.slice(0, str.length / 2),
        str.slice(str.length / 2 + 1),
    ];

    return before === strReverse(after);
}
// isogram
function isIsogram(str) {
    for (let i = 0; i < str.length - 1; i += 1) {
        for (let j = i; j < str.length; j += 1) {
            if (str[i] === str[j]) return false;
        }
    }

    return true;
}
