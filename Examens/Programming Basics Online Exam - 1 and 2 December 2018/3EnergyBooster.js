function EnergyBooster(input) {
    let kindOfFruit = String(input[0]).toLowerCase();
    let size = String(input[1]).toLowerCase();
    let quantity = parseInt(input[2]);
    let amountOfOrder = 0.00;

    if (kindOfFruit == 'watermelon' && size == 'small') {
        amountOfOrder = quantity * 2 * 56.00;
    } else if (kindOfFruit == 'watermelon' && size == 'big') {
        amountOfOrder = quantity * 5 * 28.70;
    } else if (kindOfFruit == 'mango' && size == 'small') {
        amountOfOrder = quantity * 2 * 36.66;
    } else if (kindOfFruit == 'mango' && size == 'big') {
        amountOfOrder = quantity * 5 * 19.60;
    } else if (kindOfFruit == 'pineapple' && size == 'small') {
        amountOfOrder = quantity * 2 * 42.10;
    } else if (kindOfFruit == 'pineapple' && size == 'big') {
        amountOfOrder = quantity * 5 * 24.80;
    } else if (kindOfFruit == 'raspberry' && size == 'small') {
        amountOfOrder = quantity * 2 * 20.00;
    } else if (kindOfFruit == 'raspberry' && size == 'big') {
        amountOfOrder = quantity * 5 * 15.20;
    }

    if (400 <= amountOfOrder && amountOfOrder <= 1000) {
        amountOfOrder -= 0.15 * amountOfOrder;
    } else if (amountOfOrder > 1000) {
        amountOfOrder -= 0.50 * amountOfOrder;
    }
    console.log(amountOfOrder.toFixed(2) + ' lv.');
}
EnergyBooster(['Watermelon', 'big', 4])
EnergyBooster(['Pineapple', 'small', 1])
EnergyBooster(['Raspberry', 'small', 50])
EnergyBooster(['Mango', 'big', 8])