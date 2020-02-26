function WeddingParty(input) {

    let countPeople = parseInt(input.shift());
    let budget = parseInt(input.shift());
    let moneyForFoirverg = 0.00;
    let moneyForDonation = 0.00;
    let leftMoney = 0.00;

    budget - countPeople * 20;

    if (budget >= countPeople * 20) {
        leftMoney = budget - countPeople * 20;
        moneyForFoirverg = Math.round(0.40 * leftMoney);
        moneyForDonation = Math.round(leftMoney - moneyForFoirverg);
        console.log('Yes! ' + moneyForFoirverg + ' lv are for fireworks and ' + moneyForDonation + ' lv are for donation.');
    } else {
        leftMoney = Math.round(countPeople * 20 - budget);
        console.log('They won' + '\'' + 't have enough money to pay the covert. They will need ' + leftMoney + ' lv more.');
    }
}
WeddingParty([20, 1000])
WeddingParty([10, 150])