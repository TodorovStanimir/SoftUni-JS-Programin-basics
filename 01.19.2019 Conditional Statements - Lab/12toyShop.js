function toyShop(input) {

    let priceEkskurzia = Number(input.shift());
    let puzzelbroi = Number(input.shift());
    let kuklibroi = Number(input.shift());
    let mechetabroi = Number(input.shift());
    let minionibroi = Number(input.shift());
    let kamionibroi = Number(input.shift());
    let a = 0;

    let totalbroi = puzzelbroi + kuklibroi + mechetabroi + minionibroi + kamionibroi;

    if (totalbroi >= 50) {
        a = 0.75;
    } else {
        a = 1.00;
    }

    amounth = 0.90 * a * (puzzelbroi * 2.60 + kuklibroi * 3.00 + mechetabroi * 4.10 + minionibroi * 8.20 + kamionibroi * 2.00);
    let amounth1 = Math.abs(amounth - priceEkskurzia);
    if (amounth >= priceEkskurzia) {
        console.log(`Yes! ${amounth1.toFixed(2)} lv left.`);
    } else console.log(`Not enough money! ${amounth1.toFixed(2)} lv needed.`);

}
toyShop([40.8, 20, 25, 30, 50, 10])
toyShop([320, 8, 2, 5, 5, 1])