function OddEvenPosition(input) {
    let counter = Number(input[0]);

    let OddSum = 0;
    let OddMin = Number.MAX_SAFE_INTEGER;
    let OddMax = Number.MIN_SAFE_INTEGER;
    let EvenSum = 0;
    let EvenMin = Number.MAX_SAFE_INTEGER;
    let EvenMax = Number.MIN_SAFE_INTEGER;
    let currentNumber = 0.00;

    for (let i = 1; i <= counter; i++) {
        currentNumber = Number(input[i]);
        if (i % 2 === 0) {
            EvenSum += currentNumber;
            if (currentNumber > EvenMax) {
                EvenMax = currentNumber;
            }
            if (currentNumber < EvenMin) {
                EvenMin = currentNumber;
            }
        } else {
            OddSum += currentNumber;
            if (currentNumber > OddMax) {
                OddMax = currentNumber;
            }
            if (currentNumber < OddMin) {
                OddMin = currentNumber;
            }
        }
    }
    console.log('OddSum=' + OddSum.toFixed(2) + ',')
    if (OddSum === 0) {
        //OddMax = 'No';
        console.log('OddMin=No,')
        //OddMin = 'No';
        console.log('OddMax=No,')
    } else {
        console.log('OddMin=' + OddMin.toFixed(2) + ',');
        console.log('OddMax=' + OddMax.toFixed(2) + ',');
    }
    console.log('EvenSum=' + EvenSum.toFixed(2) + ',')
    if (EvenSum === 0) {
        //EvenMax = 'No';
        console.log('EvenMin=No,')
        //EvenMin = 'No';
        console.log('EvenMax=No,')
    } else {
        console.log('EvenMin=' + EvenMin.toFixed(2) + ',');
        console.log('EvenMax=' + EvenMax.toFixed(2) + ',');
    }

    //console.log('OddSum=' + OddSum + ', OddMin=' + OddMin + ', OddMax=' + OddMax + ', EvenSum=' + EvenSum + ', EvenMin=' + EvenMin + ', EvenMax=' + EvenMax);
}
OddEvenPosition([6, 2, 3, 5, 4, 2, 1])
OddEvenPosition([2, 1.5, -2.5])
OddEvenPosition([1, 1])
OddEvenPosition([0])
OddEvenPosition([5, 3, -2, 8, 11, -3])