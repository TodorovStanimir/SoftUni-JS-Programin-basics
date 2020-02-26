function SkiTrip(input) {
    let numberOfDays = parseInt(input[0]);
    let kindOfPremises = String(input[1]);
    let grade = String(input[2]);
    let discount = 0.00;
    let priceOfRest = 0.00;

    if (kindOfPremises == 'room for one person') {
        priceOfRest = (numberOfDays - 1) * 18.00;
    } else if (kindOfPremises == 'apartment') {
        priceOfRest = (numberOfDays - 1) * 25.00;
    } else if (kindOfPremises == 'president apartment') {
        priceOfRest = (numberOfDays - 1) * 35.00
    }

    if (numberOfDays < 10 && kindOfPremises == 'apartment') {
        discount = 30 / 100;
    } else if (numberOfDays >= 10 && numberOfDays <= 15 && kindOfPremises == 'apartment') {
        discount = 35 / 100;
    } else if (numberOfDays > 15 && kindOfPremises == 'apartment') {
        discount = 50 / 100;
    } else if (numberOfDays < 10 && kindOfPremises == 'president apartment') {
        discount = 10 / 100;
    } else if (numberOfDays >= 10 && numberOfDays <= 15 && kindOfPremises == 'president apartment') {
        discount = 15 / 100;
    } else if (numberOfDays > 15 && kindOfPremises == 'president apartment') {
        discount = 20 / 100;
    }

    priceOfRest -= discount * priceOfRest;

    if (grade == 'positive') {
        priceOfRest += 0.25 * priceOfRest;
    } else if (grade == 'negative') {
        priceOfRest -= 0.10 * priceOfRest;
    }
    console.log(priceOfRest.toFixed(2));
}
SkiTrip([14, 'apartment', 'positive'])
SkiTrip([30, 'president apartment', 'negative'])
SkiTrip([12, 'room for one person', 'positive'])
SkiTrip([2, 'apartment', 'positive'])