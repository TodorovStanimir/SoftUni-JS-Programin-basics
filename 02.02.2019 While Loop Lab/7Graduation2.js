function Graduation2(input) {
    let name = String(input.shift());
    let graduade = 0.00;
    let averageGarduade = 0.00;
    let i = 0;

    while (i < 12) {
        graduade = Number(input.shift());
        if (graduade >= 4) {
            averageGarduade += graduade;
            i++
        } else {
            graduade = Number(input.shift());
            i++;
            if (graduade < 4) {
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
        }
    }
    if (i == 12) {
        averageGarduade = averageGarduade / 12;
        console.log(`${name} graduated. Average grade: ${averageGarduade.toFixed(2)}`);
    }

}

Graduation2(['Gosho', 5, 6, 5, 6, 5, 6, 6, 3, 2])