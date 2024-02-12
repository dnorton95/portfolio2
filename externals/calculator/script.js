let currentInput = '0';
let operator = '';
let prevInput = '0';

function press(num) {
    if (currentInput === '0' || currentInput === '-0') {
        currentInput = num.toString();
    } else {
        currentInput += num.toString();
    }
    updateDisplay();
}

function setOP(op) {
    operator = op;
    prevInput = currentInput;
    currentInput = '0';
    updateDisplay();
}

function clr() {
    currentInput = '0';
    operator = '';
    prevInput = '0';
    updateDisplay();
}

function calculate() {
    let result;
    const num1 = parseFloat(prevInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = num2;
    }

    currentInput = result.toString();
    operator = '';
    prevInput = '0';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}
