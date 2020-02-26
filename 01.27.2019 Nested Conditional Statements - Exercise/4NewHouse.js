function NewHouse(input) {

    let kindOfFlowers = String(input.shift());
    let numbersOfFlowers = Number(input.shift());
    let budget = Number(input.shift());
    let priceOfFlowers = 0.00;
    let price = 0.00;
    let discount = 0.00
    let balance = 0.00;

    switch (kindOfFlowers) {
        case 'Roses':
            priceOfFlowers = 5.00;
            if (numbersOfFlowers > 80) {
                discount = 10 / 100;
            }
            break;
        case 'Dahlias':
            priceOfFlowers = 3.80;
            if (numbersOfFlowers > 90) {
                discount = 15 / 100;
            }
            break;
        case 'Tulips':
            priceOfFlowers = 2.80;
            if (numbersOfFlowers > 80) {
                discount = 15 / 100;
            }
            break;
        case 'Narcissus':
            priceOfFlowers = 3.00;
            if (numbersOfFlowers < 120) {
                discount = 1.15;
            }
            break;
        case 'Gladiolus':
            priceOfFlowers = 2.50;
            if (numbersOfFlowers < 80) {
                discount = 1.20;
            }
            break;
    }
    if (discount > 1) {
        price = numbersOfFlowers * priceOfFlowers * discount;
    } else price = numbersOfFlowers * priceOfFlowers - numbersOfFlowers * priceOfFlowers * discount;

    if (budget >= price) {
        balance = budget - price;
        console.log(`Hey, you have a great garden with ${numbersOfFlowers} ${kindOfFlowers} and ${balance.toFixed(2)} leva left.`)
    } else {
        balance = price - budget;
        console.log(`Not enough money, you need ${balance.toFixed(2)} leva more.`)
    }
}
NewHouse(['Tulips', 88, 260])