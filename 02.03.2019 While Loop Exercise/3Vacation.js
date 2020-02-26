function Vacation(input) {
    let moneyForExcursions = Number(input.shift()); //нужни пари за екскурзията
    let moneyInCash = Number(input.shift()); //налични пари
    let broiPosledovatelniDniSasSpend = 0; //брой последователни дни, в които тя харчи
    let broiDni = 0; //общ брой дни


    while (broiPosledovatelniDniSasSpend < 5) {
        let tipOperacia = String(input.shift());
        let amount = Number(input.shift());
        broiDni++;
        if (tipOperacia == 'spend') {
            if ((moneyInCash - amount) < 0) {
                moneyInCash = 0.00;
            } else {
                moneyInCash -= amount;
            }
            broiPosledovatelniDniSasSpend++;
        } else {
            moneyInCash += amount;
            broiPosledovatelniDniSasSpend = 0;
        }
        if (moneyInCash >= moneyForExcursions) {
            console.log(`You saved the money for ${broiDni} days.`);
            break;
        }
    }
    if (broiPosledovatelniDniSasSpend == 5) {
        console.log(`You can't save the money.`);
        console.log(`${broiDni}`);
    }

}
Vacation([2000, 1000, 'spend', 1200, 'save', 2000])
Vacation([110, 60, 'spend', 10, 'spend', 10, 'spend', 10, 'spend', 10, 'spend', 10, ])
Vacation([250, 150, 'spend', 50, 'spend', 50, 'save', 100, 'save', 100])