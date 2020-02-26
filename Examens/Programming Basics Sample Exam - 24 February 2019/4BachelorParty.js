function BachelorParty(input) {

    let moneyForGestSinger = parseInt(input.shift());
    let item = String(input.shift());
    let peopleInGroup = 0;
    let incomesOfBachelorParty = 0.00;
    let totalCountOfGests = 0;

    while (item != 'The restaurant is full') {
        peopleInGroup = Number(item);
        if (peopleInGroup < 5) {
            incomesOfBachelorParty += peopleInGroup * 100;
            totalCountOfGests += peopleInGroup;
        } else {
            incomesOfBachelorParty += peopleInGroup * 70;
            totalCountOfGests += peopleInGroup;
        }
        item = String(input.shift());
    }
    if (incomesOfBachelorParty >= moneyForGestSinger) {
        console.log(`You have ${totalCountOfGests} guests and ${(incomesOfBachelorParty-moneyForGestSinger).toFixed(0)} leva left.`);
    } else {
        console.log(`You have ${totalCountOfGests} guests and ${incomesOfBachelorParty.toFixed(0)} leva income, but no singer.`)
    }
}
BachelorParty([2800, 5, 5, 4, 6, 6, 12, 12, 'The restaurant is full'])
BachelorParty([3200, 5, 12, 6, 6, 12, 'The restaurant is full'])