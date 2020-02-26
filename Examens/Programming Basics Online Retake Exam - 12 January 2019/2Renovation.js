function Renovation(input) {

    let budget = Number(input[0]);
    let widthOfFloor = Number(input[1]);
    let lengthOfFloor = Number(input[2]);
    let siteOfTriangle = Number(input[3]);
    let heightOfTriangle = Number(input[4]);
    let priceOfTiles = Number(input[5]);
    let priceOfBuilder = Number(input[6]);

    let areaOfFloor = widthOfFloor * lengthOfFloor;
    let areaOfTile = siteOfTriangle * heightOfTriangle / 2;
    let neededTiles = Math.ceil(areaOfFloor / areaOfTile) + 5;
    let totalPriceOfTiles = priceOfTiles * neededTiles + priceOfBuilder;

    if (budget >= totalPriceOfTiles) {
        let difference = budget - totalPriceOfTiles
        console.log(difference.toFixed(2) + ' lv left.')
    } else {
        let difference = totalPriceOfTiles - budget;
        console.log(`You'll need ${difference.toFixed(2)} lv more.`)
    }

}
Renovation([500, 3, 2.5, 0.5, 0.7, 7.80, 100])
Renovation([1000, 5.55, 8.95, 0.90, 0.85, 13.99, 321])