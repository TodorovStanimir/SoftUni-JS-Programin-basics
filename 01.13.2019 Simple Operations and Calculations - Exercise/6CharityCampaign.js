function CharityCampaign(input) {
    let days = input.shift();
    let sladkari = input.shift();
    let cakes = input.shift();
    let gofreti = input.shift();
    let palachinki = input.shift();
    let moneyforday = (cakes * 45 + gofreti * 5.8 + palachinki * 3.20) * sladkari;
    let money = moneyforday * days;
    let expensis = money / 8;
    console.log((money - expensis).toFixed(2));

}

CharityCampaign([131, 5, 9, 33, 46])