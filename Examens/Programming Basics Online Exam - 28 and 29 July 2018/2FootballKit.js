function FootballKit(input) {

    let priceTshirt = parseFloat(input.shift());
    let neededValue = parseFloat(input.shift());

    let priceShorti = 0.75 * priceTshirt;
    let priceSox = 0.20 * priceShorti;
    let priceShows = 2 * (priceTshirt + priceShorti);
    let priceEkip = (priceTshirt + priceShorti + priceSox + priceShows);
    let discount = 0.15 * priceEkip;
    priceEkip = priceEkip - discount;

    if (priceEkip >= neededValue) {
        console.log('Yes, he will earn the world-cup replica ball!');
        console.log('His sum is ' + priceEkip.toFixed(2) + ' lv.');
    } else {
        console.log('No, he will not earn the world-cup replica ball.');
        console.log('He needs ' + (neededValue - priceEkip).toFixed(2) + ' lv. more.');
    }
}
FootballKit([25, 100])
FootballKit([55, 310])