function TennisEquipment(input) {
    let priceRaketa = parseFloat(input.shift());
    let countRaketi = parseInt(input.shift());
    let countMaratonki = parseInt(input.shift());

    let moneyForRaketi = priceRaketa * countRaketi;
    let moneyForMaratonki = (priceRaketa / 6) * countMaratonki;
    let moneyOtherEquipment = 0.20 * (moneyForMaratonki + moneyForRaketi);
    let neededMoney = moneyForMaratonki + moneyForRaketi + moneyOtherEquipment;

    let moneyDzhokivich = neededMoney / 8;
    let moneySponsors = 7/8*neededMoney;

    console.log(`Price to be paid by Djokovic ${Math.floor(moneyDzhokivich)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(moneySponsors)}`);
}
TennisEquipment([])