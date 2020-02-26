function ChangeBureau(input) {

    let numberOfBitcoins = parseInt(input.shift());
    let numberofChainasyuans = parseFloat(input.shift());
    let komission = parseFloat(input.shift());

    let amountInLeva = numberOfBitcoins * 1168 + numberofChainasyuans * 0.15 * 1.76;
    let amountInEuro = amountInLeva / 1.95;
    let commission = amountInEuro * komission / 100;
    amountInEuro -= commission;

    console.log(amountInEuro.toFixed(2));
}
ChangeBureau([1, 5, 5])
ChangeBureau([20, 5678, 2.40])