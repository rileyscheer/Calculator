let currentOperator = null;
let firstOperator = '';
let secondOperator = '';
let reset = false;

const result = document.querySelector('.result');
const last = document.querySelector('.last');
const operator = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.num');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const equals = document.querySelector('#equals');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const decimal = document.querySelector('#decimal');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');


let add = (x, y) => {
    return x + y;
}


let subtract = (x, y) => {
    return x - y;
} 


let multiply = (x, y) => {
    return x * y;
}


let divide = (x, y) => {
    return x / y;
} 


function populateDisplay(number){
    if (reset.textContent === '0' || reset) {
        resetScreen()
    }
    result.textContent += number;
}


function setOperation(operator) {
    if (currentOperator !== null) {
        evaluate()
    }
    firstOperator = result.textContent;
    currentOperator = operator;
    last.textContent = `${firstOperator}${currentOperator}`;
    reset = true;
}

function resetScreen() {
    result.textContent = '';
    reset = false;
  }

function evaluate() {
    if (currentOperator === null || reset) {
        return;
    }
    if (currentOperator === '%' && result.textContent === '0') {
        result.textContent = 'ERROR';
        return;
    }
    secondOperator = result.textContent;
    last.textContent = `${firstOperator} ${currentOperator} ${secondOperator} = `
    result.textContent = roundResult(outcome(firstOperator, secondOperator));
}

function roundResult (number) {
    return Math.round(number * 1000) / 1000
}

function outcome (x, y) {
    x = Number(x);
    y = Number(y);
    console.log(`${firstOperator} ${currentOperator} ${secondOperator}`)

    if (currentOperator === '+') {
        return add(x, y);
    }   else if (currentOperator === '-') {
        return subtract(x, y);
    }   else if (currentOperator === '%') {
        return divide(x, y);
    }   else if (currentOperator === 'x') {
        return multiply(x, y);
    }   
}

function clearAll () {
    result.textContent = '';
    last.textContent = '';
    currentOperator = null;
    firstOperator = '';
    secondOperator = '';
}

numbers.forEach((button) =>
  button.addEventListener('click', () => populateDisplay(button.textContent)))

operator.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent)))

equals.addEventListener('click', evaluate)
clear.addEventListener('click', clearAll)


