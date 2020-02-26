function NumberinRange(input) {

    let num = parseInt(input.shift());

    while (true) {
        if (num < 1 || num > 100) {
            console.log('Invalid number!');
            num = parseInt(input.shift());
        } else {
            console.log(`The number is: ${num}`);
            break;
        }
    }
}

NumberinRange([-20, -15, -5, 5, 122])