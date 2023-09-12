// operation variables
let firstNum = 'empty';
let secondNum = 'empty';
let prevoperator = "";
let operator = "";
let currentValue = 0;
let multiplier = 10;
let decimalFlag = 0;


function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, a, b){
    if(operator == "+"){
        return add(a,b);
    }
    else if(operator == "-"){
        return subtract(a,b);
    }
    else if(operator == "*"){
        return multiply(a,b);
    }
    else if(operator == "/"){
        return divide(a,b);
    }
}

function populateDisplay(clickedValue, currentValue){
    // convert the values to intergers
    clickedValue = parseFloat(clickedValue);
    currentValue = parseFloat(currentValue);

    let calculatedValue = currentValue * multiplier; 
    currentValue = clickedValue + calculatedValue; 
    let screen = document.querySelector('.screen');
    screen.textContent = currentValue;
    return currentValue;
}

function populateDecimalDisplay(clickedValue, currentValue){
    clickedValue = parseFloat(clickedValue);
    currentValue = parseFloat(currentValue);

    let calculatedValue = clickedValue / multiplier;
    multiplier *= 10;
    currentValue = currentValue + calculatedValue;
    let screen = document.querySelector('.screen');
    screen.textContent = currentValue;
    return currentValue;
}

// Assigning event listener to store value of each number/operand button
let normalButtons = document.querySelectorAll('.normalButton');
normalButtons.forEach((normalButton) => {
    normalButton.addEventListener("click", () => {
        let clickedValue = normalButton.textContent; // each button is going to give off a clicked value
        console.log(clickedValue);
        if (clickedValue !== "." && clickedValue !== "+" && clickedValue !== "-" && clickedValue !== "*" && clickedValue !== "/" && clickedValue !== "="){
            if(decimalFlag == 0){
                currentValue = populateDisplay(clickedValue, currentValue);
            }
            else{
                currentValue = populateDecimalDisplay(clickedValue, currentValue);
            }
        }
        else if(clickedValue == "."){
            decimalFlag = 1;
            console.log("operand clicked"); // Complete the . button functionality
        }
        else if(clickedValue == "="){
            decimalFlag = 0;   
            firstNum = parseFloat(firstNum);
            secondNum = parseFloat(currentValue);
            console.log(`first num = ${firstNum}`);
            console.log(`second num = ${secondNum}`);
            console.log(`operator = ${operator}`);
            let finalResult = operate(operator, firstNum, secondNum);
            console.log(finalResult);
            let screen = document.querySelector('.screen');
            screen.textContent = finalResult;
            // must click clear after = to restart and clean off all variables
            // try to implement a function to erase all info/continue further calculations from here
        }
        else{
            if(clickedValue == "+"){
                multiplier = 10;
                decimalFlag = 0;
                operator = "+";
            }
            else if(clickedValue == "-"){
                multiplier = 10;
                decimalFlag = 0;
                operator = "-";
            }
            else if(clickedValue == '*'){
                multiplier = 10;
                decimalFlag = 0;
                operator = "*";
            }
            else if(clickedValue == "/"){
                multiplier = 10;
                decimalFlag = 0;
                operator = "/";
            }

            if(firstNum == 'empty'){
                firstNum = currentValue;
                currentValue = 0;
                prevoperator = operator;
            }
            else if(secondNum == 'empty'){
                firstNum = operate(prevoperator, firstNum, currentValue);
                prevoperator = operator;
                currentValue = 0;
            }
        }
    });
});

// Assigning event listener for delete and clear buttons
let screen = document.querySelector('.screen');
let deleteButtons = document.querySelectorAll(".deleteButton");
deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener('click', () => {
        let deleteValue = deleteButton.textContent;
        if(deleteValue == "CLEAR"){
            multiplier = 10;
            firstNum = 'empty';
            secondNum = 'empty';
            prevoperator = '';
            operator = '';
            currentValue = 0;
            screen.textContent = "";
            decimalFlag = 0;
        }
        else if(deleteValue == "DELETE"){
            decimalFlag = 0;
            multiplier = 10;
            console.log("Entered delete");
            console.log(currentValue);
            currentValue = parseInt(currentValue/10);
            console.log(currentValue);
            if(currentValue == 0){
                screen.textContent = '';
            }
            else{
                screen.textContent = currentValue;
            }
        }
    });
});
