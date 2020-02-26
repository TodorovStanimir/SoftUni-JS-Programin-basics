function Darts(input) {
    let namePlayer = String(input.shift());
    let sector = '';
    let currentPoint = 0;
    let points = 301;
    let uspeshniudari = 0;
    let neuspeshniopiti = 0;
    sector = String(input.shift());
    let isRetire = false;

    while (points > 0) {
        if (sector == 'Retire') {
            isRetire = true;
            break;
        }
        currentPoint = parseInt(input.shift());
        if (sector == 'Single') {
            currentPoint = currentPoint;
        } else if (sector == 'Double') {
            currentPoint = 2 * currentPoint;
        } else if (sector == 'Triple') {
            currentPoint = 3 * currentPoint;
        }

        if (currentPoint <= points) {
            points -= currentPoint;
            uspeshniudari++;
        } else {
            neuspeshniopiti++;
        }
        sector = String(input.shift());
    }
    if (isRetire) {
        console.log(`${namePlayer} retired after ${neuspeshniopiti} unsuccessful shots.`);
    } else {
        console.log(`${namePlayer} won the leg with ${uspeshniudari} shots.`);
    }
}