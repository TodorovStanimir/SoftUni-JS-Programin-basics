function ComputerFirm(input) {
    let count = parseInt(input[0]);
    let currentItem = 0;
    let currentreiting = 0;
    let availableSellings = 0;
    let sellings = 0;
    let reiting = 0;

    for (let i = 1; i <= count; i++) {
        currentItem = parseInt(input[i]);
        currentreiting = currentItem % 10;
        reiting += currentreiting;
        availableSellings = Math.floor(currentItem / 10);
        if (currentreiting == 2) {
            sellings += 0 * availableSellings;
        } else if (currentreiting == 3) {
            sellings += 0.5 * availableSellings;
        } else if (currentreiting == 4) {
            sellings += 0.7 * availableSellings;
        } else if (currentreiting == 5) {
            sellings += 0.85 * availableSellings;
        } else if (currentreiting == 6) {
            sellings += availableSellings;
        }

    }
    console.log(sellings.toFixed(2));
    console.log((reiting / count).toFixed(2));

}
ComputerFirm([3, 103, 103, 103])
ComputerFirm([5, 122, 156, 202, 214, 185])