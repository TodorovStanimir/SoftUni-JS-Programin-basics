function PastryShop(input) {
    //Prices of swiths
    let priceCake1 = 24.00;
    let priceCake2 = 28.70;
    let priceSufle1 = 6.66;
    let priceSufle2 = 9.80;
    let priceBaklava1 = 12.60;
    let priceBaklava2 = 16.98;
    let price = 0.00;
    let totalPrice = 0.00;

    let typeSwits = String(input[0]).toLowerCase();
    let countSwits = parseInt(input[1]);
    let day = parseInt(input[2]);

    if (typeSwits == 'cake') {
        if (day <= 15) {
            price = priceCake1;
        } else {
            price = priceCake2;
        }
    } else if (typeSwits == 'souffle') {
        if (day <= 15) {
            price = priceSufle1;
        } else {
            price = priceSufle2;
        }
    } else if (typeSwits == 'baklava') {
        if (day <= 15) {
            price = priceBaklava1;
        } else {
            price = priceBaklava2;
        }

    }
    totalPrice = price * countSwits;

    if (day <= 22 && totalPrice > 100 && totalPrice <= 200) {
        totalPrice -= 0.15 * totalPrice;
    } else if (day <= 22 && totalPrice > 200) {
        totalPrice -= 0.25 * totalPrice;
    }

    if (day <= 15) {
        totalPrice -= 0.10 * totalPrice;
    }
    console.log(totalPrice.toFixed(2));

}
PastryShop(['Cake', 10, 15])
PastryShop(['Souffle', 20, 24])
PastryShop(['Baklava', 50, 1])
PastryShop(['Cake', 5, 12])