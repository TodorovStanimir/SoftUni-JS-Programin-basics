function Trekkingequipment(input) {
    let countAlpinisti = parseInt(input[0]);
    let countKarabineri = parseInt(input[1]);
    let countVazheta = parseInt(input[2]);
    let countPikeli = parseInt(input[3]);
    let price = 0.00;
    let totalPrice = 0.00;

    price = countAlpinisti * (countKarabineri * 36 + countVazheta * 3.60 + countPikeli * 19.80);
    totalPrice = price * 1.2;

    console.log(totalPrice.toFixed(2));
}
Trekkingequipment([20, 14, 30, 6])
Trekkingequipment([131, 9, 33, 46])