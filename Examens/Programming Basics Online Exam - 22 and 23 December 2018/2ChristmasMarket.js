function ChristmasMarket(input) {

    let neededProfit = parseFloat(input[0]);
    let countFantasyBooks = parseInt(input[1]);
    let countHorarBooks = parseInt(input[2]);
    let countRomanticBooks = parseInt(input[3]);
    let VAT = 0.00;
    let totalProfit = 0.00;
    let moneyForWorkers = 0.00;
    let moneyForDonations = 0.00;
    let moneyNeeded = 0.00;

    //prices of books
    let priceFantasyBooks = 14.90
    let priceHorarBooks = 9.80
    let priceRomanticBooks = 4.30

    let totalIncoms = priceFantasyBooks * countFantasyBooks + priceHorarBooks * countHorarBooks + priceRomanticBooks * countRomanticBooks;
    totalProfit = totalIncoms - 0.20 * totalIncoms;

    if (totalProfit >= neededProfit) {
        moneyForWorkers = Math.floor(0.10 * (totalProfit - neededProfit));
        moneyForDonations = totalProfit - moneyForWorkers;
        console.log(moneyForDonations.toFixed(2) + ' leva donated.');
        console.log('Sellers will receive ' + moneyForWorkers + ' leva.');
    } else {
        moneyNeeded = neededProfit - totalProfit;
        console.log(moneyNeeded.toFixed(2) + ' money needed.');
    }
}
ChristmasMarket([200, 15, 10, 5])
ChristmasMarket([168, 5, 3, 8])