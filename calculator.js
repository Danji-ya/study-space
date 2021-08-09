const calculatorDisplay = document.querySelector('.calcalator-display');
const buttons = document.querySelectorAll('.calcalator-buttons > button');

const operator = e => {
    // innerText와 innerHTML 차이 블로그에 적어두기
    console.log(e.currentTarget.innerText);
};
const getValue = e => {
    console.log(e.currentTarget.value);
};

const decimal = e => {
    console.log(e.currentTarget);
};

const clearAll = e => {
    console.log(e.currentTarget);
};

[...buttons].map(button => {
    // classList 사용한 이유: contains 이용하기 위해서 className에서는 x
    if (button.classList.contains('operator')) {
        button.addEventListener('click', operator);
    } else if (button.classList.contains('decimal')) {
        button.addEventListener('click', decimal);
    } else if (button.classList.contains('init')) {
        button.addEventListener('click', clearAll);
    } else {
        button.addEventListener('click', getValue);
    }
});
