'use strict';
let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operator'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear-btn'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';





for (let i = 0; i < numbers.length; i++) {
    let evenNumber = numbers[i];
    evenNumber.addEventListener('click', function(e) {
        numberPress(e.target.textContent);
    });
}

for (let i = 0; i < operations.length; i++) {
    let evenOperation = operations[i];
    evenOperation.addEventListener('click', function(e) {
        operationFunc(e.srcElement.id);

    });
}

for (let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function(e) {
        clearDisp(e.srcElement.id);
    });

}


decimalBtn.addEventListener('click', addDecimal);




function numberPress(currentNumber) {
    if (MemoryNewNumber == true) {
        display.value = currentNumber;
        MemoryNewNumber = false;
    } else {
        if (display.value == 0) {
            display.value = currentNumber;
        } else {
            display.value += currentNumber;
        }
    }
}


function operationFunc(operat) {
    let localOperationMemory = display.value;
    if (MemoryNewNumber == true && MemoryPendingOperation != 'result') {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation == 'plus') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation == 'minus') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation == 'multipl') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation == 'divis') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation == 'sqrt') {
            MemoryCurrentNumber = Math.sqrt(MemoryCurrentNumber);
        } else if (MemoryPendingOperation == 'pow') {
            MemoryCurrentNumber = Math.pow(MemoryCurrentNumber, localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = operat;
    }
}

function addDecimal(arg) {
    let localDecimalMemory = display.value;
    if (MemoryNewNumber == true) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }
    }
    display.value = localDecimalMemory;
}

function clearDisp(id) {
    if (id == 'ce') {
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id == 'c') {
        display.value = '0';
        MemoryNewNumber = true;
        MemoryPendingOperation = '';
        MemoryCurrentNumber = 0;
    }

}
















// plusMinus () {
//   if (this.currentOperand.startsWith('-')) {
//     this.currentOperand = this.currentOperand.slice(1, -1)
//   } else {
//     this.currentOperand = -${this.currentOperand}
//   }
// }