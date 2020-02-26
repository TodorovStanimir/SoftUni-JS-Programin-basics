function GoingHome(input) {
    let distance = parseInt(input.shift());
    let fuelPerHundredKilometres = parseInt(input.shift());
    let priceFuel = parseFloat(input.shift());
    let moneyWinOnTourner = parseInt(input.shift());
    let expences = 0.00;

    expences = ((distance * fuelPerHundredKilometres) / 100) * priceFuel;

    if (moneyWinOnTourner >= expences) {
        console.log('You can go home. ' + (moneyWinOnTourner - expences).toFixed(2) + ' money left.');
    } else {
        console.log('Sorry, you cannot go home. Each will receive ' + (moneyWinOnTourner / 5).toFixed(2) + ' money.');
    }
}
GoingHome([100, 5, 1.2, 6])
GoingHome([120, 5, 1.2, 4])
GoingHome([100, 8, 1.2, 20])