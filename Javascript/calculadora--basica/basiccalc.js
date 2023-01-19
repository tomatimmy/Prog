// Get all the buttons
const buttons = document.querySelectorAll('#buttons button');
// Get the display element
const display = document.querySelector('#display');

// Add click event listeners to all buttons
buttons.forEach(button => button.addEventListener('click', handleButtonClick));

let firstOperand = null;
let operator = null;
let secondOperand = null;

function handleButtonClick(event) {
    // Get the value of the button that was clicked
    const buttonValue = event.target.value;

    if (buttonValue === 'c') {
        // Clear the display and reset all values
        display.value = '';
        firstOperand = null;
        operator = null;
        secondOperand = null;
    } else if (!isNaN(buttonValue) || buttonValue === '.') {
        // Append the value to the display if it is a number or a decimal point
        display.value += buttonValue;
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
        // Save the operator if it is an arithmetic operator
        operator = buttonValue;
        // Save the first operand as the current value of the display
        firstOperand = Number(display.value);
        // Clear the display
        display.value = '';
    } else if (buttonValue === '=') {
        // Save the second operand as the current value of the display
        secondOperand = Number(display.value);
        // Perform the calculation based on the operator
        let result;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                break;
        }
        // Display the result
        display.value = result;
    }
}
