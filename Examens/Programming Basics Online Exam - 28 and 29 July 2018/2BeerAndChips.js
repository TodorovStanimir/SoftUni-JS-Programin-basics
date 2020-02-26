function BeerAndChips(input) {

    let nameFen = String(input.shift());
    let budget = parseFloat(input.shift());
    let countBottelsOfBeer = parseInt(input.shift());
    let countPacketOfChipps = parseInt(input.shift());

    let amountOfBeer = countBottelsOfBeer * 1.2;
    let priceChips = 0.45 * amountOfBeer;
    let amountChips = Math.ceil(priceChips * countPacketOfChipps);
    let restMoney = budget - (amountOfBeer + amountChips);

    if (restMoney >= 0) {
        console.log(nameFen + ' bought a snack and has ' + restMoney.toFixed(2) + ' leva left.');
    } else {
        console.log(nameFen + ' needs ' + Math.abs(restMoney).toFixed(2) + ' more leva!');
    }
}
BeerAndChips(['George', 10, 2, 3])
BeerAndChips(['Valetin', 5, 2, 4])