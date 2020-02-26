function ProjectPrize(input) {
    let numberOfParts = parseInt(input[0]);
    let priceForPoint = parseFloat(input[1]);
    let points = 0;

    for (let i = 1; i <= numberOfParts; i++) {

        if (i % 2 == 0) {
            points += 2 * parseInt(input[i + 1]);
        } else {
            points += parseInt(input[i + 1]);
        }
    }
    console.log('The project prize was ' + (points * priceForPoint).toFixed(2) + ' lv.');
}
ProjectPrize([7, 100.5, 2, 4, 5, 1, 1, 7, 3])