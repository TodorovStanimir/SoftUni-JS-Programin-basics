function WeddingInvestment(input) {
    let termContract = String(input.shift());
    let typeContract = String(input.shift());
    let isDesert = String(input.shift());
    let countmonth = parseInt(input.shift());

    let monthAmount = 0.00;

    if (termContract == 'one') {
        if (typeContract == 'Small') {
            monthAmount = 9.98;
        } else if (typeContract == 'Middle') {
            monthAmount = 18.99;
        } else if (typeContract == 'Large') {
            monthAmount = 25.98;
        } else if (typeContract == 'ExtraLarge') {
            monthAmount = 35.99;
        }
    } else if (termContract == 'two') {
        if (typeContract == 'Small') {
            monthAmount = 8.58;
        } else if (typeContract == 'Middle') {
            monthAmount = 17.09;
        } else if (typeContract == 'Large') {
            monthAmount = 23.59;
        } else if (typeContract == 'ExtraLarge') {
            monthAmount = 31.79;
        }
    }
    if (isDesert == 'yes') {
        if (monthAmount <= 10) {
            monthAmount += 5.50
        } else if (monthAmount <= 30) {
            monthAmount += 4.35
        } else {
            monthAmount += 3.85
        }
    }

    if (termContract == 'two') {
        monthAmount -= 3.75 / 100 * monthAmount;
    }

    let totalAmount = monthAmount * countmonth;
    console.log(totalAmount.toFixed(2) + ' lv.');
}
WeddingInvestment(['one', 'Small', 'yes', 10])
WeddingInvestment(['two', 'Large', 'no', 10])