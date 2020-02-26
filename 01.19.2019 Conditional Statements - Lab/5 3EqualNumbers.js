function equallNumbers(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let num3 = Number(input.shift());
    if (num1 !== num2) {
        console.log('no');
    } else {
        if (num2 !== num3) {
            console.log('no');
        } else {
            console.log('yes');
        }
    }
}
equallNumbers([3, 3, 3])