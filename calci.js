// Get references to elements
const display = document.getElementById('display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const calculateButton = document.getElementById('calculate');

// Initialize variables
let currentInput = '0';
let operator = '';
let firstOperand = null;

// Update the display
function updateDisplay() {
    display.textContent = currentInput;
}

// Add event listeners to digit buttons
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '0') {
            currentInput = button.textContent;
        } else {
            currentInput += button.textContent;
        }
        updateDisplay();
    });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        firstOperand = currentInput;
        currentInput = '0';
        updateDisplay();
    });
});

// Clear button functionality
clearButton.addEventListener('click', () => {
    currentInput = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
});

// Calculate button functionality
calculateButton.addEventListener('click', () => {
    if (operator && firstOperand !== null) {
        const secondOperand = currentInput;
        switch (operator) {
            case '+':
                currentInput = (parseFloat(firstOperand) + parseFloat(secondOperand)).toString();
                break;
            case '-':
                currentInput = (parseFloat(firstOperand) - parseFloat(secondOperand)).toString();
                break;
            case '*':
                currentInput = (parseFloat(firstOperand) * parseFloat(secondOperand)).toString();
                break;
            case '/':
                currentInput = (parseFloat(firstOperand) / parseFloat(secondOperand)).toString();
                break;
        }
        operator = '';
        firstOperand = null;
        updateDisplay();
    }
});

// Initialize the display
updateDisplay();
