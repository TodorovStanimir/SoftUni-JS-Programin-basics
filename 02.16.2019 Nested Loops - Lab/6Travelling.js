function Travelling(input) {
    let destination = String(input.shift());
    let minimalBudget = Number(input.shift());;
    let budget = 0;
    let current = 0

    while (destination != 'End') {
        current = Number(input.shift());
        budget += current;
        if (budget >= minimalBudget) {
            console.log('Going to ' + destination + '!');
            budget = 0;
            destination = String(input.shift());
            minimalBudget = Number(input.shift());
        }

    }
}
//Travelling(['Greece', 1000, 200, 200, 300, 100, 150, 240, 'Spain', 1200, 300, 500, 193, 423, 'End'])
Travelling(['France', 2000, 300, 300, 200, 400, 190, 258, 360, 'Portugal', 1450, 400, 400, 200, 300, 300, 'Egypt', 1900, 1000, 280, 300, 500, 'End'])