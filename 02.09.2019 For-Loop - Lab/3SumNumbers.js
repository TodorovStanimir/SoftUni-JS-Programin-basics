function sumnumbers(args) {

    let amount = 0.00;
    let y = Number(args[0]);

    for (let i = 1; i <= y; i++) {
        amount += Number(args[i]);
    }
    console.log(amount);
}
sumnumbers([20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);