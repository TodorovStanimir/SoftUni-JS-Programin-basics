function LeftandRightSum(args) {
    let a = Number(args[0]);
    let sum1 = 0.00;
    let sum2 = 0.00;

    for (let i = 1; i <= a; i++) {
        sum1 += Number(args[i]);
        sum2 += Number(args[2 * a + 1 - i]);
    }

    if (sum1 === sum2) {
        console.log(`Yes, sum = ${sum1}`);
    } else {
        console.log(`No, diff = ${Math.abs(sum1-sum2)}`);
    }
}
LeftandRightSum([2, 3, 5, 1, 2])