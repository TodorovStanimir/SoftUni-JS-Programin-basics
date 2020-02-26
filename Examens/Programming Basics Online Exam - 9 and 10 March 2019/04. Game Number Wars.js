function GameNumberWars(input) {
    let nameFirstPlayer = String(input.shift());
    let nameSecondPlayer = String(input.shift());
    let card = String(input.shift());
    let pointsFirstPlayer = 0;
    let pointsSecondPlayer = 0;
    let cardFirstPlayer = 0;
    let cardSecondPlayer = 0;
    let isWinner = '';
    let pointWinner = 0;

    while (card != 'End of game') {
        cardFirstPlayer = parseInt(card);
        cardSecondPlayer = parseInt(input.shift());

        if (cardFirstPlayer > cardSecondPlayer) {
            pointsFirstPlayer += (cardFirstPlayer - cardSecondPlayer);
        } else if (cardFirstPlayer < cardSecondPlayer) {
            pointsSecondPlayer += (cardSecondPlayer - cardFirstPlayer);
        } else {
            card = 'Number wars!'
            cardFirstPlayer = parseInt(input.shift());
            cardSecondPlayer = parseInt(input.shift());
            if (cardFirstPlayer > cardSecondPlayer) {
                isWinner = nameFirstPlayer;
                pointWinner = pointsFirstPlayer;
            } else {
                isWinner = nameSecondPlayer;
                pointWinner = pointsSecondPlayer;
            }
            break;
        }
        card = String(input.shift());
    }
    if (card == 'Number wars!') {
        console.log('Number wars!');
        console.log(`${isWinner} is winner with ${pointWinner} points`)
    } else {
        console.log(`${nameFirstPlayer} has ${pointsFirstPlayer} points`);
        console.log(`${nameSecondPlayer} has ${pointsSecondPlayer} points`);
    }
}
GameNumberWars(['Desi', 'Niki', 7, 5, 3, 4, 3, 3, 5, 3])
GameNumberWars(['Elena', 'Simeon', 6, 3, 2, 5, 8, 9, 'End of game'])
GameNumberWars(['Aleks', 'Georgi', 4, 5, 3, 2, 4, 3, 4, 4, 5, 2])