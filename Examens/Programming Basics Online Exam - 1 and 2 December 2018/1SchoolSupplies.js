function SchoolSupplies(input) {
    //prices of goods
    let pricePencils = 5.80;
    let priceMarkers = 7.20;
    let priceChemikals = 1.20;

    let countPencils = parseInt(input[0]);
    let countMarkers = parseInt(input[1]);
    let countChemikals = parseFloat(input[2]);
    let percentDiscount = parseInt(input[3]);
    let neededMoney = 0.00;

    neededMoney = countPencils * pricePencils + countMarkers * priceMarkers + countChemikals * priceChemikals;
    neededMoney -= percentDiscount / 100 * neededMoney;

    console.log(neededMoney.toFixed(3));

}
SchoolSupplies([2, 3, 2.5, 25])
SchoolSupplies([4, 2, 5, 13])
SchoolSupplies([7, 8, 0.5, 45])