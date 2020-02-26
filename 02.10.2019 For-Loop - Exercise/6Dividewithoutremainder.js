function DivideWithoudRemainder(input) {
    let counter = Number(input[0]);
    let currentNumber = 0.00;
    let p1 = 0.00;
    let p2 = 0.00;
    let p3 = 0.00;

    for (let i = 1; i <= counter; i++) {
        currentNumber = Number(input[i]);
        if (currentNumber % 2 === 0) {
            p1++;
        }
        if (currentNumber % 3 === 0) {
            p2++;
        }
        if (currentNumber % 4 === 0) {
            p3++;
        }
    }
    console.log((p1 / counter * 100).toFixed(2)+'%');
    console.log((p2 / counter * 100).toFixed(2)+'%');
    console.log((p3 / counter * 100).toFixed(2)+'%');
}
DivideWithoudRemainder([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])