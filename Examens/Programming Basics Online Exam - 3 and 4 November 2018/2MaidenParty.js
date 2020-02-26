function MaidenParty(input) {
    let priceMaidenParty = parseFloat(input.shift());
    let countLoveLaters = parseFloat(input.shift());
    let countRoses = parseFloat(input.shift());
    let countKeyHolders = parseFloat(input.shift());
    let countPictures = parseFloat(input.shift());
    let countLickySurprises = parseFloat(input.shift());
    let countTotalItems = countLoveLaters + countRoses + countKeyHolders + countPictures;

    let priceItems = countLoveLaters * 0.60 + countRoses * 7.20 + countKeyHolders * 3.60 + countPictures * 18.20 + countLickySurprises * 22;

    if (countTotalItems >= 25) {
        priceItems -= 0.35 * priceItems
    }
    priceItems -= 0.10 * priceItems;
    if (priceItems >= priceMaidenParty) {
        console.log(`Yes! ${(priceItems-priceMaidenParty).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceMaidenParty-priceItems).toFixed(2)} lv needed.`);
    }
}
MaidenParty([40.8, 20, 25, 30, 50, 10])
MaidenParty([320, 8, 2, 5, 5, 1])