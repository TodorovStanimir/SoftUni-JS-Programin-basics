function FlowerShop(input) {

    let quantityChrisantems = parseInt(input[0]);
    let quantityRoses = parseInt(input[1]);
    let quantityTuleps = parseInt(input[2]);
    let season = String(input[3]);
    let selebration = String(input[4]);

    let priceFlowers = 0.00;

    if ((season == 'Spring' || season === 'Summer') && selebration == 'N') {
        priceFlowers = quantityChrisantems * 2 + quantityRoses * 4.10 + quantityTuleps * 2.50;
    } else if ((season == 'Spring' || season === 'Summer') && selebration == 'Y') {
        priceFlowers = quantityChrisantems * 2 * 1.15 + quantityRoses * 4.10 * 1.15 + quantityTuleps * 2.50 * 1.15;
    } else if ((season == 'Autumn' || season === 'Winter') && selebration == 'N') {
        priceFlowers = quantityChrisantems * 3.75 + quantityRoses * 4.50 + quantityTuleps * 4.15;
    } else if ((season == 'Autumn' || season === 'Winter') && selebration == 'Y') {
        priceFlowers = quantityChrisantems * 3.75 * 1.15 + quantityRoses * 4.50 * 1.15 + quantityTuleps * 4.15 * 1.15;
    }
    if (quantityTuleps > 7 && season == 'Spring') {
        priceFlowers -= 5 / 100 * priceFlowers;
    }
    if (quantityRoses >= 10 && season == 'Winter') {
        priceFlowers -= 10 / 100 * priceFlowers;
    }
    if ((quantityChrisantems + quantityRoses + quantityTuleps) > 20) {
        priceFlowers -= 20 / 100 * priceFlowers;
    }
    priceFlowers += 2;
    console.log(priceFlowers.toFixed(2));
}
FlowerShop([2, 4, 8, 'Spring', 'Y'])
FlowerShop([3, 10, 9, 'Winter', 'N'])