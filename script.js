// operation variables
let firstNum = 0;
let secondNum = 0;
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
    if(operator == "add"){
        add(a,b);
    }
    else if(operator == "subtract"){
        subtract(a,b);
    }
    else if(operator == "multiply"){
        multiply(a,b);
    }
    else if(operator == "divide"){
        divide(a,b);
    }
}

function populateDisplay(clickedValue, currentValue, multiplier){
    // convert the values to intergers
    clickedValue = parseInt(clickedValue);
    currentValue = parseInt(currentValue);
    multiplier = parseInt(multiplier);

    let calculatedValue = currentValue * multiplier; 
    currentValue = clickedValue + calculatedValue; 
    let screen = document.querySelector('.screen');
    screen.textContent = currentValue;
    return {currentValue, multiplier};
}


// Assigning event listener to store value of each number button
let normalButtons = document.querySelectorAll('.normalButton');
normalButtons.forEach((normalButton) => {
    normalButton.addEventListener("click", () => {
        let clickedValue = normalButton.textContent; // each button is going to give off a clicked value
        console.log(clickedValue);
        if (clickedValue !== "." && clickedValue !== "+" && clickedValue !== "-" && clickedValue !== "*" && clickedValue !== "/" && clickedValue !== "="){
            let result = populateDisplay(clickedValue, currentValue, multiplier);
            currentValue = result.currentValue;
            multiplier = result.multiplier;
        }
        else{
            console.log("operand clicked");
        }
    });
});








