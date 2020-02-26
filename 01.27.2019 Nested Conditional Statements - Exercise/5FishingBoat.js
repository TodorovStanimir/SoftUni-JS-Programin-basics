function FishingBoat(input) {

    let budget = Number(input.shift());
    let season = String(input.shift()).toLowerCase();
    let countOfFishers = Number(input.shift());
    let rentOfSheap = 0.00;

    switch (season) {
        case 'spring':
            rentOfSheap = 3000.00;
            break;
        case 'summer':
        case 'autumn':
            rentOfSheap = 4200.00;
            break;
        case 'winter':
            rentOfSheap = 2600.00;
            break;
    }

    if (countOfFishers <= 6) {
        rentOfSheap -= rentOfSheap * 0.10;
    } else if (countOfFishers <= 11) {
        rentOfSheap -= rentOfSheap * 0.15;
    } else {
        rentOfSheap -= rentOfSheap * 0.25;
    }


    if (countOfFishers % 2 == 0 && (season == 'spring' || season == 'summer' || season == 'winter')) {
        rentOfSheap -= rentOfSheap * 0.05;
    }

    if (budget >= rentOfSheap) {
        console.log('Yes! You have ' + (budget - rentOfSheap).toFixed(2) + ' leva left.');
    } else console.log('Not enough money! You need ' + (rentOfSheap - budget).toFixed(2) + ' leva.')

}

FishingBoat([2000, 'Winter', 13])