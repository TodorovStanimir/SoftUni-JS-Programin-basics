function StadiumIncome(input) {
    let countSectors = parseInt(input.shift());
    let capacity = parseInt(input.shift());
    let priceTicket = parseFloat(input.shift());

    let incomesForSector = (capacity * priceTicket) / countSectors;
    let totalIncomes = capacity * priceTicket;
    let moneyForDonations = (totalIncomes - 0.75 * incomesForSector) / 8;

    console.log('Total income - ' + totalIncomes.toFixed(2) + ' BGN');
    console.log('Money for charity - ' + moneyForDonations.toFixed(2) + ' BGN');
}
StadiumIncome([4, 5000, 5])
StadiumIncome([8, 10000, 3.25])