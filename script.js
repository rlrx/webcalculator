// operation variables
let firstNum = 'empty';
let secondNum = 'empty';
let operator = "";
let currentValue = 0;
let multiplier = 10;


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


// Assigning event listener to store value of each number button
let normalButtons = document.querySelectorAll('.normalButton');
normalButtons.forEach((normalButton) => {
    normalButton.addEventListener("click", () => {
        let clickedValue = normalButton.textContent; // each button is going to give off a clicked value
        console.log(clickedValue);
        if (clickedValue !== "." && clickedValue !== "+" && clickedValue !== "-" && clickedValue !== "*" && clickedValue !== "/" && clickedValue !== "="){
            currentValue = populateDisplay(clickedValue, currentValue);
        }
        else if(clickedValue == "."){
            console.log("operand clicked");
        }
        else if(clickedValue == "="){   
            firstNum = parseFloat(firstNum);
            secondNum = parseFloat(currentValue);
            console.log(`first num = ${firstNum}`);
            console.log(`second num = ${secondNum}`);
            console.log(`operator = ${operator}`);
            let finalResult = operate(operator, firstNum, secondNum);
            console.log(finalResult);
            let screen = document.querySelector('.screen');
            screen.textContent = finalResult;
        }
        else{
            if(clickedValue == "+"){
                operator = "+";
            }
            else if(clickedValue == "-"){
                operator = "-";
            }
            else if(clickedValue == '*'){
                operator = "*";
            }
            else if(clickedValue == "/"){
                operator = "/";
            }

            if(firstNum == 'empty'){
                firstNum = currentValue;
                currentValue = 0;
            }
            else if(secondNum == 'empty'){
                firstNum = operate(operator, firstNum, currentValue);
                currentValue = 0;
            }
        }
    });
});








