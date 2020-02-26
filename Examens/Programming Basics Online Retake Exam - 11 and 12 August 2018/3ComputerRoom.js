function ComputerRoom(input) {
    let month = String(input.shift());
    let time = parseInt(input.shift());
    let countPeople = parseInt(input.shift());
    let partOfDay = String(input.shift());
    let pricePerHour = 0.00;
    let totalPrice = 0.00;

    if ((month == 'march' || month == 'april' || month == 'may') && partOfDay == 'day') {
        pricePerHour = 10.50;
    } else if ((month == 'march' || month == 'april' || month == 'may') && partOfDay == 'night') {
        pricePerHour = 8.40;
    } else if ((month == 'june' || month == 'july' || month == 'august' || month == 'september' ||
            month == 'october' || month == 'november' || month == 'december' || month == 'january' || month == 'february') && partOfDay == 'day') {
        pricePerHour = 12.60;
    } else if ((month == 'june' || month == 'july' || month == 'august' || month == 'september' ||
            month == 'october' || month == 'november' || month == 'december' || month == 'january' || month == 'february') && partOfDay == 'night') {
        pricePerHour = 10.20;
    }

    if (countPeople >= 4) {
        pricePerHour = 0.90 * pricePerHour;

    }

    if (time >= 5) {
        pricePerHour -= 0.50 * pricePerHour
    }
    totalPrice = pricePerHour * countPeople * time;
    console.log('Price per person for one hour: ' + pricePerHour.toFixed(2));
    console.log('Total cost of the visit: ' + totalPrice.toFixed(2));
}
ComputerRoom(['march', 3, 3, 'day'])
ComputerRoom(['july', 5, 5, 'night'])