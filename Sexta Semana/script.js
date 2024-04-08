document.addEventListener('DOMContentLoaded', function () {
    const calculatorDiv = document.getElementById('calculator');
    const display = document.createElement('input');
    display.setAttribute('type', 'text');
    display.setAttribute('id', 'display');
    display.setAttribute('readonly', 'readonly');
    calculatorDiv.appendChild(display);

    const buttons = [
        ['AC', '+/-', '%', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];

    buttons.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        row.forEach(buttonText => {
            const button = document.createElement('button');
            button.textContent = buttonText;
            button.addEventListener('click', function () {
                if (buttonText === '=') {
                    calculate();
                } else if (buttonText === 'AC') {
                    clearDisplay();
                } else if (buttonText === '+/-') {
                    toggleSign();
                } else {
                    appendToDisplay(buttonText);
                }
            });
            rowDiv.appendChild(button);
        });
        calculatorDiv.appendChild(rowDiv);
    });

    let expression = '';

    function appendToDisplay(text) {
        expression += text;
        display.value = expression;
    }

    function clearDisplay() {
        expression = '';
        display.value = '';
    }

    function toggleSign() {
        expression = eval(expression * -1);
        display.value = expression;
    }

    function calculate() {
        try {
            const result = eval(expression);
            display.value = result;
            expression = '';
        } catch (error) {
            alert('Expressão inválida!');
        }
    }
});
