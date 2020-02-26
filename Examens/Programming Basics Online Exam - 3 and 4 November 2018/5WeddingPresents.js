function WeddingPresents(input) {
    let totalGests = parseInt(input.shift());
    let countGifts = parseInt(input.shift());
    let persentA = 0;
    let persentB = 0;
    let persentV = 0;
    let persentG = 0;
    let item = '';

    for (let i = 0; i < countGifts; i++) {
        item = String(input.shift());

        if (item == 'A') {
            persentA++;
        } else if (item == 'B') {
            persentB++;
        } else if (item == 'V') {
            persentV++;
        } else if (item == 'G') {
            persentG++;
        }
    }
    console.log((persentA / countGifts * 100).toFixed(2) + '%');
    console.log((persentB / countGifts * 100).toFixed(2) + '%');
    console.log((persentV / countGifts * 100).toFixed(2) + '%');
    console.log((persentG / countGifts * 100).toFixed(2) + '%');
    console.log((countGifts / totalGests * 100).toFixed(2) + '%');

}
//WeddingPresents([76, 10, 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B'])
WeddingPresents([93, 16, 'A', 'V', 'G', 'G', 'B', 'B', 'G', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'B', 'A'])