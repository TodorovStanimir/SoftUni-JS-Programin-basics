function ChristmasSweets(input) {

    let priceBaklava = parseFloat(input[0]);
    let priceMafini = parseFloat(input[1]);
    let kilosShtolen = parseFloat(input[2]);
    let kilosBonboni = parseFloat(input[3]);
    let kilosBisquites = parseFloat(input[4]);

    let priceShtolen = 1.6 * priceBaklava;
    let priceBonboni = 1.8 * priceMafini;
    let priceBisquites = 7.50;

    let totalPrice = kilosShtolen * priceShtolen + kilosBonboni * priceBonboni + kilosBisquites * priceBisquites;

    console.log(totalPrice.toFixed(2));

}
ChristmasSweets([6.90, 4.20, 1.5, 2.5, 1])
ChristmasSweets([5.55, 3.57, 4.3, 3.6, 7])