function TradeCommissions(input) {

    let town = String(input.shift()).toLowerCase();
    let prodajbi = Number(input.shift());
    let procentKomisionna = 0.00
    if (town === 'sofia') {
        if (0 <= prodajbi && prodajbi <= 500) {
            procentKomisionna = 5;
        } else if (500 < prodajbi && prodajbi <= 1000) {
            procentKomisionna = 7;
        } else if (1000 < prodajbi && prodajbi <= 10000) {
            procentKomisionna = 8;
        } else if (prodajbi > 10000) {
            procentKomisionna = 12;
        }

    } else if (town === 'varna') {
        if (0 <= prodajbi && prodajbi <= 500) {
            procentKomisionna = 4.5;
        } else if (500 < prodajbi && prodajbi <= 1000) {
            procentKomisionna = 7.5;
        } else if (1000 < prodajbi && prodajbi <= 10000) {
            procentKomisionna = 10;
        } else if (prodajbi > 10000) {
            procentKomisionna = 13;
        }

    } else if (town === 'plovdiv') {
        if (0 <= prodajbi && prodajbi <= 500) {
            procentKomisionna = 5.5;
        } else if (500 < prodajbi && prodajbi <= 1000) {
            procentKomisionna = 8;
        } else if (1000 < prodajbi && prodajbi <= 10000) {
            procentKomisionna = 12;
        } else if (prodajbi > 10000) {
            procentKomisionna = 14.5;
        }

    }
    if (prodajbi > 0 && (town == 'sofia' || town == 'varna' || town == 'plovdiv')) {
        console.log((prodajbi * procentKomisionna / 100).toFixed(2));
    } else console.log('error');

}

TradeCommissions(['Plovdiv', -50])