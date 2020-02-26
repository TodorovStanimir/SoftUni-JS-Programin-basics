function OperationsBetweenNumbers(input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let operation = String(input.shift()).toLowerCase();
    let result = 0.00;
    let chislo = '';
    if (operation === '/' && n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operation === '/') {
        result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    }
    if (operation === '%' && n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operation === '%') {
        result = n1 % n2;
        console.log(`${n1} % ${n2} = ${result}`);
    }

    if (operation === '+') {
        result = n1 + n2;
    } else if (operation === '-') {
        result = n1 - n2;
    } else if (operation === '*') {
        result = n1 * n2;
    }
    if (operation === '+' || operation === '-' || operation === '*') {
        if (result % 2 === 0.00) {
            chislo = 'even'
        } else chislo = 'odd';
        console.log(`${n1} ${operation} ${n2} = ${result} - ${chislo}`);
    }

}

OperationsBetweenNumbers([7, 3, '*'])