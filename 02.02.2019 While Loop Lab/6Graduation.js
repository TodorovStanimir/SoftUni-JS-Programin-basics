function Graduation(input) {
    let name = String(input.shift());
    let graduade = 0.00;
    let averageGarduade = 0.00;
    let i = 0;

    while (i < 12) {
        graduade = Number(input.shift());
        if (graduade >= 4) {
            averageGarduade += graduade;
            i++
        }
    }
    averageGarduade = averageGarduade / 12;
    console.log(`${name} graduated. Average grade: ${averageGarduade.toFixed(2)}`);

}

Graduation(['Pesho', 4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5])