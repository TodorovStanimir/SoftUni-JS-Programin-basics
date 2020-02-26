function BestPlayer(input) {
    let name = String(input.shift());
    let currentGoal = 0;
    let maxGoal = 0;
    let nameWithMaxGoal = '';
    let isHatTrick = false;
    while (name != 'END') {
        currentGoal = parseInt(input.shift());
        if (currentGoal > maxGoal) {
            maxGoal = currentGoal;
            nameWithMaxGoal = name;
            if (maxGoal >= 3) {
                isHatTrick = true;
            }
            if (maxGoal >= 10) {
                break;
            }
        }
        name = String(input.shift());
    }
    console.log(nameWithMaxGoal + ' is the best player!');
    if (isHatTrick) {
        console.log('He has scored ' + maxGoal + ' goals and made a hat-trick !!!');
    } else {
        console.log('He has scored ' + maxGoal + ' goals.');
    }
}
BestPlayer(['Neymar', 2, 'Ronaldo', 1, 'Messi', 3, 'END'])
BestPlayer(['Silva', 5, 'Harry Kane', 10])
BestPlayer(['Rooney', 1, 'Junior', 2, 'Paolinio', 2, 'END'])