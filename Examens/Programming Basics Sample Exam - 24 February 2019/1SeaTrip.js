function SeaTrip(input) {
    let moneyForFoodPerDay = parseFloat(input.shift());
    let moneyForSouvenirsPerDay = parseFloat(input.shift());
    let moneyForHotelPerDay = parseFloat(input.shift());

    let moneyForTransport = 210 * 2 * 7 / 100 * 1.85;
    let moneyForSouvenirs = moneyForSouvenirsPerDay * 3;
    let moneyForFood = moneyForFoodPerDay * 3;
    let moneyForHotelForFirstDay = 0.9 * moneyForHotelPerDay;
    let moneyForHotelForSecondDay = 0.85 * moneyForHotelPerDay;
    let moneyForHotelForThirdDay = 0.80 * moneyForHotelPerDay;

    let totalMoney = moneyForTransport + moneyForSouvenirs + moneyForFood + moneyForHotelForFirstDay + moneyForHotelForSecondDay + moneyForHotelForThirdDay;

    console.log(`Money needed: ${totalMoney.toFixed(2)}`);
}
//SeaTrip([100, 50, 500])
SeaTrip([200,200,1000])