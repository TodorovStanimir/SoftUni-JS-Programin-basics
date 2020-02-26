function NameWars(input) {
    let currentName = input.shift();
    let MaxLenght = Number.MIN_SAFE_INTEGER;;
    let winnerName = '';

    while (currentName != 'STOP') {
        let currentLenght = 0;
        for (let i = 0; i < currentName.length; i++) {
            currentLenght += currentName.charCodeAt(i);
        }
        if (currentLenght >= MaxLenght) {
            MaxLenght = currentLenght;
            winnerName = currentName;;
        }
        currentName = input.shift();
    }
    console.log('Winner is ' + winnerName + ' - ' + MaxLenght + '!');
}
NameWars(['Petar', 'Georgi', 'Stanimir', 'STOP'])
NameWars(['Ivo', 'Niki', 'Valio', 'Konstantin', 'STOP'])
NameWars(['STOP'])