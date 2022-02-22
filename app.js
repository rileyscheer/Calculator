let displayValue = 0;
let currentOperator = '';
let flag = false;
let result = document.querySelector('.result');
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


result.innerText = displayValue;

let add = (x, y) => console.log(x + y)

let subtract = (x, y) => x - y

let multiply = (x, y) => x * y

let divide = (x, y) => x / y

function operate (x, currentOperator, y) {
    if (currentOperator === "+") {
        add(x, y);
    }
}


// Getting the current operator
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', () => {
        let flag = true;
        let firedOperator = event.target.innerText;
        currentOperator = firedOperator;
        console.log(currentOperator);
        operate()
    });
}

// Getting the number that was clicked
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        let firedButton = event.target.innerText;
        result.innerText = firedButton;
        displayValue = result.innerHTML;
        console.log(displayValue);
        if (flag === false) {
            console.log('ok')
            // allow for multi digit numbers until op is pressed
        }
    });
}

// for (let i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener("click", () => {
//         while (operator.click === true) {
//             let firedButton = event.target.innerText;
//             result.innerText = firedButton;
//             displayValue = result.innerHTML;
//             console.log(displayValue);
//         }
//     });
// }


