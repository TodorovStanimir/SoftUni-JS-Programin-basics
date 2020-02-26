function MathPuzzle(input) {
    let key = parseInt(input.shift());
    let countPrintedNumbers = 0;

    for (let i = 1; i <= 30; i++) {
        for (let y = 1; y <= 30; y++) {
            for (let z = 1; z <= 30; z++) {
                if (i < y && y < z && i + y + z == key) {
                    console.log(`${i} + ${y} + ${z} = ${key}`);
                    countPrintedNumbers++
                }
                if (i > y && y > z && i * y * z == key) {
                    console.log(`${i} * ${y} * ${z} = ${key}`);
                    countPrintedNumbers++
                }
            }
        }
    }
    if (countPrintedNumbers == 0) {
        console.log('No!')
    }
}
MathPuzzle([93])