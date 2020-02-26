function Honeymoon(input) {
    let budget = parseFloat(input.shift());
    let town = String(input.shift());
    let countNights = parseInt(input.shift());

    let priceExcursion = 0.00;

    if (town == 'Cairo') {
        priceExcursion = countNights * 2 * 250 + 600;
    } else if (town == 'Paris') {
        priceExcursion = countNights * 2 * 150 + 350;
    } else if (town == 'Lima') {
        priceExcursion = countNights * 2 * 400 + 850;
    } else if (town == 'New York') {
        priceExcursion = countNights * 2 * 300 + 650;
    } else if (town == 'Tokyo') {
        priceExcursion = countNights * 2 * 350 + 700;
    }

    if (countNights <= 4) {
        if (town == 'Cairo' || town == 'New York') {
            priceExcursion -= 3 / 100 * priceExcursion;
        }
    } else if (countNights <= 9) {
        if (town == 'Cairo' || town == 'New York') {
            priceExcursion -= 5 / 100 * priceExcursion;
        } else if (town == 'Paris') {
            priceExcursion -= 7 / 100 * priceExcursion;
        }
    } else if (countNights <= 24) {
        if (town == 'Cairo') {
            priceExcursion -= 10 / 100 * priceExcursion;
        } else if (town == 'Paris' || town == 'New York' || town == 'Tokyo') {
            priceExcursion -= 12 / 100 * priceExcursion;
        }
    } else if (countNights <= 49) {
        if (town == 'Tokyo' || town == 'Cairo') {
            priceExcursion -= 17 / 100 * priceExcursion;
        } else if (town == 'New York' || town == 'Lima') {
            priceExcursion -= 19 / 100 * priceExcursion;
        } else if (town == 'Paris') {
            priceExcursion -= 22 / 100 * priceExcursion;
        }
    } else if (countNights >= 50) {
        priceExcursion -= 30 / 100 * priceExcursion;
    }
    if (budget >= priceExcursion) {
        console.log('Yes! You have ' + (budget - priceExcursion).toFixed(2) + ' leva left.');
    } else {
        console.log('Not enough money! You need ' + (priceExcursion - budget).toFixed(2) + ' leva.');
    }
}
Honeymoon([2000, 'Cairo', 1])
Honeymoon([5000, 'New York', 8])