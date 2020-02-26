function Journey(input) {

    let budget = Number(input.shift());
    let season = String(input.shift()).toLowerCase();
    let place = '';
    let kindOfPochivka = '';
    let stoinostNaPochivkata = 0.00;

    if (budget <= 100) {
        place = 'Bulgaria';
        if (season === 'summer') {
            kindOfPochivka = 'Camp';
            stoinostNaPochivkata = 30 / 100;
        } else {
            kindOfPochivka = 'Hotel';
            stoinostNaPochivkata = 70 / 100;
        }
    } else if (budget <= 1000) {
        place = 'Balkans';
        if (season === 'summer') {
            kindOfPochivka = 'Camp';
            stoinostNaPochivkata = 40 / 100;
        } else {
            kindOfPochivka = 'Hotel';
            stoinostNaPochivkata = 80 / 100;
        }
    } else {
        place = 'Europe';
        kindOfPochivka = 'Hotel';
        stoinostNaPochivkata = 90 / 100;

    }
    console.log(`Somewhere in ${place}`);
    console.log(`${kindOfPochivka} - ${(stoinostNaPochivkata*budget).toFixed(2)}`);

}
Journey([1500.00, 'summer'])