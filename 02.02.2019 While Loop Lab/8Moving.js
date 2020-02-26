function Moving(input) {

    let x = Number(input.shift());
    let y = Number(input.shift());
    let z = Number(input.shift());
    let obemKashoni = 0.00;
    let argument = 0.00
    let argument1 = 0.00;
    let bool = true;

    while (x * y * z >= obemKashoni) {
        argument = input.shift();
        if (argument === 'Done') {
            console.log(`${x*y*z-obemKashoni} Cubic meters left.`);
            bool = false;
            break;
        } else {
            argument1 = Number(argument);
            obemKashoni += argument1;
        }
    }
    if (bool) {
        console.log(`No more free space! You need ${obemKashoni-x*y*z} Cubic meters more.`);
    }
}

Moving([10, 1, 2, 4, 6, 'Done'])