function ChristmasGiffts(input) {
    let counterAdult = 0.00;
    let counterKids = 0.00;
    let moneyForToys = 0.00;
    let moneyForSweaters = 0.00;
    let currentage = String(input.shift());

    while (currentage != 'Christmas') {
        if (Number(currentage) <= 16) {
            counterKids++;
        } else {
            counterAdult++;
        }
        currentage = String(input.shift());
    }
    console.log('Number of adults: ' + counterAdult);
    console.log('Number of kids: ' + counterKids);
    console.log('Money for toys: ' + (counterKids * 5).toFixed(0));
    console.log('Money for sweaters: ' + (counterAdult * 15).toFixed(0));
}
ChristmasGiffts([16, 20, 46, 12, 8, 20, 49, 'Christmas'])
ChristmasGiffts([16, 16, 16, 16, 16, 'Christmas'])