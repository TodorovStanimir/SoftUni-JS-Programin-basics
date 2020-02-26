function MinNumber(args) {

    let y = Number(args[0]);
    let z = Number.POSITIVE_INFINITY;

    for (i = 1; i <= y; i++) {
        z = Math.min(Number(args[i]), z);
    }
    console.log(z);
}
MinNumber([4, 45, -20, 7, 99])