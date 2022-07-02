let result = new Result();

let numbers = document.querySelectorAll('button.num');
let operators = document.querySelectorAll('button.operator');
let resultDisplay = document.querySelector('.result');

numbers.forEach(function(number){
    number.onclick = function(){
        result.addInput(number.value);
        updateDisplay();
    };
});

operators.forEach(function(operator){
    operator.onclick = function(){
        result.changeOperator(operator.value);
        console.log(result.operator);
        updateDisplay();
    };

});

function updateDisplay(){
    resultDisplay.textContent = result.value;

}
function add(num1, num2){
    return Number(num1) + Number(num2);
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1/num2;
}

function operate (operator, num1, num2){
    switch(operator){
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}

let operator = document.querySelector('button.operator');

function Result(){
    this.value = '';
    this.operator = '=';
    this.workingValue = '';

    this.changeOperator = function (newOperator){
        if (this.workingValue){
            this.value = operate(this.operator,this.value, this.workingValue).toString();
            this.workingValue='';
            console.log("new value is", this.value);
        }
        this.operator = newOperator;

    };

    this.addInput = function(numStr){
        console.log(!(this.operator === '='));
        if (this.value.includes('.') && numStr === '.') return;
        if (this.operator === '=') this.value += numStr;
        if (!(this.operator === '=')){
            this.workingValue +=numStr;
        }
    };


    

}