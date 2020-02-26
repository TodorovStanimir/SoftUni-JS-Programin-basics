function WeddingTime(input) {

    let priceWhisky = parseFloat(input.shift());
    let quantityWater = parseFloat(input.shift());
    let quantityVine = parseFloat(input.shift());
    let quantityShampagne = parseFloat(input.shift());
    let quantityWhisky = parseFloat(input.shift());

    let priceShampagne = priceWhisky * 0.50;
    let priceVine = 0.40 * priceShampagne;
    let priceWater = 0.10 * priceShampagne;

    let totalAmount = quantityWater * priceWater + quantityVine * priceVine + quantityShampagne * priceShampagne + quantityWhisky * priceWhisky;

    console.log(totalAmount.toFixed(2));
}
WeddingTime([50, 10, 3.5, 6.5, 1])
WeddingTime([63.44, 3.57, 6.35, 8.15, 2.5])