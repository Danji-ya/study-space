const calculatorDisplay = document.querySelector('.calcalator-display > p');
const buttons = document.querySelectorAll('.calcalator-buttons > button');

const operators = {
    '+': (value1, value2) => value1 + value2,
    '-': (value1, value2) => value1 - value2,
    x: (value1, value2) => value1 * value2,
    '÷': (value1, value2) => value1 / value2,
    '=': (value1 = null, value2) => value2,
};

let waitingValue = false;
let prevValue = '';
let prevOperator = '';

const getNextValue = operator => {
    waitingValue = true;
    prevOperator = operator;
};

const numberOperation = e => {
    // first operator
    if (!prevOperator) return getNextValue(e.currentTarget.innerText);

    // from the second operator && operator's turn
    if (!waitingValue) {
        calculatorDisplay.innerText = operators[prevOperator](
            Number(prevValue),
            Number(calculatorDisplay.innerText),
        );
    }

    return getNextValue(e.currentTarget.innerText);
};

const getValue = e => {
    const displayValue = calculatorDisplay.innerText;

    if (waitingValue) {
        prevValue = displayValue;
        calculatorDisplay.innerText = e.currentTarget.value;

        waitingValue = false;
    } else {
        calculatorDisplay.innerText =
            displayValue === '0'
                ? e.currentTarget.value
                : displayValue + e.currentTarget.value;
    }
};

const decimal = () => {
    const displayValue = calculatorDisplay.innerText;
    if (!displayValue.includes('.')) {
        calculatorDisplay.innerText = `${displayValue}.`;
    }
};

const clearAll = () => {
    waitingValue = false;
    prevValue = '';
    prevOperator = '';
    calculatorDisplay.innerText = '0';
};

/* ------------------------------ DOM control------------------------------------------------ */
const addListener = () => {
    [...buttons].map(button => {
        if (button.classList.contains('operator')) {
            button.addEventListener('click', numberOperation);
        } else if (button.classList.contains('decimal')) {
            button.addEventListener('click', decimal);
        } else if (button.classList.contains('init')) {
            button.addEventListener('click', clearAll);
        } else {
            button.addEventListener('click', getValue);
        }
    });
};

const init = () => {
    addListener();
};

init();
