let displayValue = '';
let currentOperator = '';
let flag = false;
let firedButton = '';
let displayList = [];
const dec = '.';
const result = document.querySelector('.result');
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
    answer = (x + y); 
    if (answer % 1 != 0) {
        rounded = answer.toFixed(3);
        result.textContent = rounded;
    }   else {
        result.textContent = answer;
    }
}


let subtract = (x, y) => {
    answer = (x - y)
    if (answer % 1 != 0) {
        rounded = answer.toFixed(3);
        result.textContent = rounded;
    }   else {
        result.textContent = answer;
    }
} 


let multiply = (x, y) => {
    answer = (x * y); 
    if (answer % 1 != 0) {
        rounded = answer.toFixed(3);
        result.textContent = rounded;
    }   else {
        result.textContent = answer;
    }
}


let divide = (x, y) => {
    answer = (x / y);
    if (answer % 1 != 0) {
        rounded = answer.toFixed(3);
        result.textContent = rounded;
    }   else {
        result.textContent = answer;
    }
} 


// Getting the current operator
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', () => {
        displayList.push(displayValue);  // Putting entered numbers into a list to calculate later
        console.log(displayList)
        flag = true;  
        let firedOperator = event.target.innerText;
        if (firedOperator != '=') {
            currentOperator = firedOperator;
            console.log(`${flag} ${currentOperator}`);
            return currentOperator;
        }
    });
}


let countDecimals = function (value) { 
    if ((value % 1) != 0) 
        return value.toString().split(".")[1].length;  
    return 0;
};


// Getting and displaying the numbers that were clicked
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        if (flag === true) {              // resetting the screen if an operator was used
            result.textContent = '';
        }
        flag = false;
        let firedButton = event.target.innerText;
        result.textContent += firedButton;
        displayValue = result.textContent;
        console.log(displayValue);
        return displayValue;
    });
}


// listen for = then call the correct function
equals.addEventListener('click', (x, y) => {
    x = parseFloat(displayList[0]);
    y = parseFloat(displayList[1]);
    console.log(x, y, currentOperator)
    if (currentOperator === "+") {
        add(x, y);
    }   else if (currentOperator === "-") {
        subtract(x, y);
    }   else if (currentOperator === "x") {
        multiply(x, y);
    }   else if (currentOperator === "%") {
        divide(x, y);
    }
})

clear.addEventListener('click', () => {
    displayValue = 0;
    currentOperator = '';
    displayList = [];
    result.textContent = '';
})

// decimal.addEventListener('click', () => {
//     addDec = displayValue.concat(dec);
//     console.log(addDec)
//     return addDec;
// })






