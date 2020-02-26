function PuppyCare(input) {
    let quantityFood = parseInt(input.shift());
    let Item = String(input.shift());
    let eatedFood = 0.00;
    let Leftovers = 0.00

    while (Item != 'Adopted') {
        eatedFood += Number(Item);
        Item = String(input.shift());
    }
    if ((quantityFood * 1000) >= eatedFood) {
        Leftovers = quantityFood * 1000 - eatedFood
        console.log('Food is enough! Leftovers: ' + Leftovers + ' grams.');
    } else {
        Leftovers = eatedFood - quantityFood * 1000;
        console.log('Food is not enough. You need ' + Leftovers + ' grams more.')
    }
}
PuppyCare([4, 130, 345, 400, 180, 230, 120, 'Adopted'])
PuppyCare([3, 1000, 1000, 1000, 'Adopted'])
PuppyCare([2, 999, 456, 999, 999, 123, 456, 'Adopted'])