function HighJump(input) {
    let zhelanaVisochina = parseInt(input.shift());
    let neededVisochina = zhelanaVisochina - 30;
    let currentVisochina = 0;
    let counterneuspeshniskoove = 0;
    let isneuspeh = false;
    let counterjumps = 0;

    while (neededVisochina <= zhelanaVisochina) {
        currentVisochina = parseInt(input.shift());
        counterjumps++;
        if (currentVisochina > neededVisochina) {
            neededVisochina += 5;
            counterneuspeshniskoove = 0;
        } else {
            counterneuspeshniskoove++;
        }
        if (counterneuspeshniskoove == 3) {
            isneuspeh = true;
            break;
        }
    }
    if (isneuspeh) {
        console.log(`Tihomir failed at ${neededVisochina}cm after ${counterjumps} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${zhelanaVisochina}cm after ${counterjumps} jumps.`)
    }
}
HighJump([231, 205, 212, 213, 228, 229, 230, 235])
HighJump([250, 225, 224, 225, 228, 231, 235, 234, 235])