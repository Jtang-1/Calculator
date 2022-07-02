let result = new Result();

let numbers = document.querySelectorAll('button.num');
let operators = document.querySelectorAll('button.operator');
let mainResultDisplay = document.querySelector('.mainResult');
let workingResultDisplay = document.querySelector('.workingResult')
let clearButton = document.querySelector('button.clear');
let deleteButton = document.querySelector('button.delete')

window.addEventListener('keydown', function(e){
    key = e.key;
    c
    
});

numbers.forEach(function(number){
    number.onclick = function(){ handleNumber(number)};
});

operators.forEach(function(operator){
    operator.onclick = function(){ handleOperator(operator)};
});

function handleNumber(number){
    result.addInput(number.value);
    updateDisplay();
}

function handleOperator(operator){
    if (operator.value === '=' && result.workingValue){
        workingResultDisplay.textContent = `${result.value} ${result.operator} ${result.workingValue} =`;
    }
    result.changeOperator(operator.value);

    updateDisplay();
};

deleteButton.onclick = function(){
    result.delete();
    updateDisplay();
};

clearButton.onclick = function(){
    result.clear();
    updateDisplay();
};

function updateDisplay(){
    if (result.workingValue){
        mainResultDisplay.textContent = result.workingValue;
    } else{
        mainResultDisplay.textContent = result.value;
    }
    updateWorkingResultDisplay();
}

function updateWorkingResultDisplay(){
    if (!(result.operator === '=')){
        workingResultDisplay.textContent = `${result.value} ${result.operator}`;
    } 
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

function roundTwoDec(num){
    return Math.round((num+Number.EPSILON) * 100) / 100;
}

function Result(){
    this.value = '';
    this.operator = '=';
    this.workingValue = '';

    this.changeOperator = function (newOperator){
        if (this.workingValue){
            this.value = roundTwoDec(operate(this.operator,this.value, this.workingValue)).toString();
            this.workingValue='';
            console.log('reset working value');
        }
        
        this.operator = newOperator;

    };

    this.addInput = function(numStr){
        console.log(!(this.operator === '='));
        if (this.operator === '='){
            if (this.value.includes('.') && numStr === '.') return;
            this.value += numStr;
        }
        if (!(this.operator === '=')){
            if (this.workingValue.includes('.') && numStr === '.') return;
            this.workingValue +=numStr;
        }
    };

    this.delete = function(){
        if (this.value){
            console.log("this is", this.value);
            this.value = this.value.slice(0,-1);
            console.log("new", this.value);
        }
    };

    this.clear = function(){
        this.value = '';
        this.operator = '=';
        this.workingValue = '';
    }


}