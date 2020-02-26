function Cake(input) {
    let width = parseInt(input.shift());
    let length = parseInt(input.shift());
    let takenPiecesCake = 0;
    let bool=true;

    while (width * length >= takenPiecesCake) {
        argument = input.shift();
        if (argument === "STOP") {
            console.log(`${width*length-takenPiecesCake} pieces are left.`);
            bool=false
            break;
        } else {
            argument1 = Number(argument);
            takenPiecesCake+=argument1;
        }
    }
    if (bool) {
        console.log(`No more cake left! You need ${Math.abs(takenPiecesCake-width*length)} pieces more.`);
    } 
}
Cake([10, 10, 20, 20, 20, 20, 21, 'STOP'])
Cake(([10, 2, 2, 4, 6, 'STOP']))