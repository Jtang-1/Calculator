let result = new Result();

let numbers = document.querySelectorAll('button.num');
numbers.forEach(function(number){
    number.onclick = function(){
        console.log(number.value);
        result.addInput(number.value);
        console.log(result.value);
    };
});


function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
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
            add(num1, num2);
            break;
        case "-":
            substract(num1, num2);
            break;
        case "*":
            multiple(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
}

let operator = document.querySelector('button.operator');
console.log("test " + operator.value);

function Result(){
    this.value = '';
    let operator = null;

    this.changeOperator = function (newOperator){
        operator = newOperator;
    };

    this.addInput = function(numStr){
        this.value += numStr;
    };
    

}