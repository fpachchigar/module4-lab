// Calculator state
let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false;

// Get display element
const display = document.getElementById('display');

// Function to append values to display
function appendToDisplay(value) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    
    // Handle operators
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput === '' && previousInput === '') {
            return; // Don't allow operator as first input
        }
        
        if (operator && currentInput && previousInput) {
            // Calculate existing operation first
            calculate();
        }
        
        operator = value;
        previousInput = currentInput || previousInput;
        currentInput = '';
        updateDisplay(previousInput + ' ' + getOperatorSymbol(value) + ' ');
        return;
    }
    
    // Handle decimal point
    if (value === '.') {
        if (currentInput.includes('.')) {
            return; // Don't allow multiple decimal points
        }
        if (currentInput === '') {
            currentInput = '0.';
        } else {
            currentInput += value;
        }
    } else {
        // Handle numbers
        currentInput += value;
    }
    
    updateDisplay((previousInput && operator ? previousInput + ' ' + getOperatorSymbol(operator) + ' ' : '') + currentInput);
}

// Function to update display
function updateDisplay(value) {
    display.value = value || '0';
}

// Function to get operator symbol for display
function getOperatorSymbol(op) {
    switch(op) {
        case '+': return '+';
        case '-': return '-';
        case '*': return '×';
        case '/': return '÷';
        default: return op;
    }
}

// Function to perform calculation
function calculate() {
    if (!operator || !previousInput || !currentInput) {
        return;
    }
    
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;
    
    switch(operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                updateDisplay('Error: Division by zero');
                resetCalculator();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    // Round to avoid floating point precision issues
    result = Math.round(result * 100000000) / 100000000;
    
    updateDisplay(result.toString());
    
    // Reset for next calculation
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    shouldResetDisplay = true;
}

// Function to clear display (reset)
function clearDisplay() {
    resetCalculator();
    updateDisplay('');
}

// Function to reset calculator state
function resetCalculator() {
    currentInput = '';
    operator = '';
    previousInput = '';
    shouldResetDisplay = false;
}

// Function to delete last character
function deleteLast() {
    if (shouldResetDisplay) {
        clearDisplay();
        return;
    }
    
    if (currentInput) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay((previousInput && operator ? previousInput + ' ' + getOperatorSymbol(operator) + ' ' : '') + currentInput);
    } else if (operator) {
        operator = '';
        currentInput = previousInput;
        previousInput = '';
        updateDisplay(currentInput);
    }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Numbers and decimal point
    if (/[0-9\.]/.test(key)) {
        appendToDisplay(key);
    }
    
    // Operators
    if (key === '+' || key === '-') {
        appendToDisplay(key);
    }
    if (key === '*') {
        appendToDisplay('*');
    }
    if (key === '/') {
        event.preventDefault(); // Prevent browser search
        appendToDisplay('/');
    }
    
    // Enter or equals
    if (key === 'Enter' || key === '=') {
        calculate();
    }
    
    // Escape or 'c' for clear
    if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearDisplay();
    }
    
    // Backspace for delete
    if (key === 'Backspace') {
        deleteLast();
    }
});

// Initialize display
updateDisplay('');