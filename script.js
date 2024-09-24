let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to handle keyboard input
document.addEventListener('keydown', function(event) {
    let key = event.key;
    
    // Check if the key is a number or operator
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (key === '+') {
        appendOperator('+');
    } else if (key === '-') {
        appendOperator('-');
    } else if (key === '*') {
        appendOperator('*');
    } else if (key === '/') {
        appendOperator('/');
    } else if (key === '.') {
        appendOperator('.');
    } else if (key === 'Enter') {
        calculate();  // Enter to calculate
    } else if (key === 'Backspace') {
        deleteLast(); // Backspace to delete last
    } else if (key === 'Escape') {
        clearDisplay();  // Escape to clear the display
    }
});
