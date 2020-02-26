function Spaceship(input) {
    let widthSheep = parseFloat(input.shift());
    let lenghtSheep = parseFloat(input.shift());
    let heightSheep = parseFloat(input.shift());
    let averageHeightAstronavts = parseFloat(input.shift());

    let sizeSheep = widthSheep * lenghtSheep * heightSheep;
    let placeForOneAstronavt = 2 * 2 * (averageHeightAstronavts + 0.4);

    let capacitySheep = Math.floor(sizeSheep / placeForOneAstronavt);

    if (capacitySheep >= 3 && capacitySheep <= 10) {
        console.log(`The spacecraft holds ${capacitySheep} astronauts.`);
    } else if (capacitySheep < 3) {
        console.log('The spacecraft is too small.');
    } else if (capacitySheep > 10) {
        console.log('The spacecraft is too big.');
    }
}
//Spaceship([3.5, 4, 5, 1.70])
//Spaceship([4.5, 4.8, 5, 1.75])
Spaceship([3, 3, 4, 1.68])