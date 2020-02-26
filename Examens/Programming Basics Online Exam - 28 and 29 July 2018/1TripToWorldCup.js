function TripToWorldCup(input) {
    let priceTicketOtivane = parseFloat(input.shift());
    let priceTicketVrashtane = parseFloat(input.shift());
    let priceTicketMach = parseFloat(input.shift());
    let countMaches = parseInt(input.shift());
    let procentDiscount = parseInt(input.shift());

    let totalSum = (priceTicketOtivane + priceTicketVrashtane) * 6 * (100 - procentDiscount) / 100 + priceTicketMach * countMaches * 6;
    let pricePerEach = totalSum / 6;

    console.log('Total sum: ' + totalSum.toFixed(2) + ' lv.');
    console.log('Each friend has to pay ' + pricePerEach.toFixed(2) + ' lv.');
}
TripToWorldCup([175, 280, 125, 5, 15])
TripToWorldCup([210, 235, 150, 6, 12])