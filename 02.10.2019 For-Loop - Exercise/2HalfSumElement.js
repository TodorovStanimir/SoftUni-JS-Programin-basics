function HalfSumElement(input) {

    let counter = Number(input[0]);
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let SumNumbers = 0.00;
    let currentNumber = 0.00
    for (let i = 1; i <= counter; i++) {
        currentNumber = Number(input[i])
        SumNumbers += currentNumber;
        if (maxNumber < currentNumber) {
            maxNumber = currentNumber;
        }
    }
    if ((SumNumbers - maxNumber) === maxNumber) {
        console.log('Yes');
        console.log('Sum = ' + maxNumber);
    } else {
        console.log('No');
        console.log('Diff = ' + Math.abs(2 * maxNumber - SumNumbers));
    }

}
HalfSumElement([7, 3, 4, 1, 1, 2, 12, 1])
HalfSumElement([3, 1, 1, 10])
HalfSumElement([3, 5, 5, 1])
HalfSumElement([3, 1, 1, 1])