function HappyCatParking(input) {
    let countDays = parseInt(input.shift());
    let countHours = parseInt(input.shift());

    let totalPrice = 0;
    for (let days = 1; days <= countDays; days++) {
        let price = 0;
        for (let hours = 1; hours <= countHours; hours++) {
            if (days % 2 == 0 && hours % 2 != 0) {
                price += 2.50;
            } else if (days % 2 != 0 && hours % 2 == 0) {
                price += 1.25;
            } else {
                price += 1;
            }
        }
        totalPrice += price;
        console.log(`Day: ${days} - ${price.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
//HappyCatParking([2, 5])
HappyCatParking([5, 2])