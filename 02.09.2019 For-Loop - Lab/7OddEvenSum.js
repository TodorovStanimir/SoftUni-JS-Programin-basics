function OddEvenSum(args) {

    let broi = Number(args[0]);
    let sumOdd = 0.00;
    let sumEven = 0.00;

    for (let i = 1; i <= broi; i++) {
        if (i % 2 === 0) {
            sumEven += Number(args[i]);
        } else sumOdd += Number(args[i]);
    }
    if (sumEven === sumOdd) {
        console.log('Yes');
        console.log(`Sum = ${sumEven}`);
    } else {
        console.log('No');
        console.log(`Diff = ${Math.abs(sumEven-sumOdd)}`);
    }
}
OddEvenSum([3, 5, 8, 1])