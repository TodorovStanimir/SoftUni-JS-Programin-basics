function Journey(input) {

    let kindOfYear = String(input.shift()).toLowerCase();
    let numberOfSelebration = Number(input.shift());
    let numberOfWeekends = Number(input.shift());
    let weekendsInSofia = 0.00;
    let weekendsInFathersHouse = 0.00;
    let daysPlayVoleibol = 0.00

    weekendsInSofia = (48 - numberOfWeekends) * 3 / 4 + numberOfSelebration * 2 / 3;
    weekendsInFathersHouse = numberOfWeekends
    if (kindOfYear == 'leap') {
        daysPlayVoleibol = (weekendsInFathersHouse + weekendsInSofia) * 1.15;
    } else daysPlayVoleibol = weekendsInFathersHouse + weekendsInSofia;
    console.log(Math.trunc(daysPlayVoleibol));
}
Journey(['normal', 11,6])