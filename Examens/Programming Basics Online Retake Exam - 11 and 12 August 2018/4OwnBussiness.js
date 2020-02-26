function OwnBussiness(input) {
    let width = parseInt(input.shift());
    let lenght = parseInt(input.shift());
    let high = parseInt(input.shift());
    let currentCount = '';
    let freePlace = width * lenght * high;


    while (currentCount != 'Done') {
        freePlace -= Number(currentCount);
        if (freePlace < 0) {
            break;
        }
        currentCount = String(input.shift());
    }
    if (freePlace < 0) {
        console.log('No more free space! You need ' + Math.abs(freePlace) + ' Cubic meters more.')
    } else {
        console.log(freePlace + ' Cubic meters left.')
    }
}
OwnBussiness([10, 10, 2, 20, 20, 20, 20, 122])
OwnBussiness([10, 1, 2, 4, 6, 'Done'])