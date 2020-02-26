function WeddingSeats(input) {
    let lastSector = String(input.shift());
    let rowInFirstSector = parseInt(input.shift());
    let columnInOddRow = parseInt(input.shift());
    let counter = 0;


    for (let sector = 65; sector <= lastSector.charCodeAt(); sector++) {
        for (let row = 1; row <= rowInFirstSector; row++) {
            if (row % 2 == 0) {
                for (let column = 97; column < (97 + 2 + columnInOddRow); column++) {
                    console.log(String.fromCharCode(sector) + row + String.fromCharCode(column));
                    counter++;
                }
            } else {
                for (let column = 97; column < (97 + columnInOddRow); column++) {
                    console.log(String.fromCharCode(sector) + row + String.fromCharCode(column));
                    counter++;
                }
            }
        }
        rowInFirstSector++;
    }
    console.log(counter);
}
WeddingSeats(['C', 4, 2])