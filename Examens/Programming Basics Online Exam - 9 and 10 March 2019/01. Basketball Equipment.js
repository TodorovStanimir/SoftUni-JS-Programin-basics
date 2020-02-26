function BasketballEquipment(input) {
    let earlyPaymentForBascetball = parseInt(input.shift());

    let priceKetsove = 0.60 * earlyPaymentForBascetball;
    let priceEkip = 0.80 * priceKetsove;
    let priceBall = priceEkip / 4;
    let priceAsesories = priceBall / 5;

    let totalPrice = earlyPaymentForBascetball + priceKetsove + priceEkip + priceBall + priceAsesories;

    console.log(totalPrice.toFixed(2));
}
BasketballEquipment([550])