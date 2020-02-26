function FootballSouvenirs(input) {

    let team = String(input.shift());
    let souvenir = String(input.shift());
    let countSouvenir = parseInt(input.shift());
    let priceSouvenir = 0.00;
    let amount = 0.00;

    if (team == 'Argentina') {
        if (souvenir == 'flags') {
            priceSouvenir = 3.25;
        } else if (souvenir == 'caps') {
            priceSouvenir = 7.20;
        } else if (souvenir == 'posters') {
            priceSouvenir = 5.10;
        } else if (souvenir == 'stickers') {
            priceSouvenir = 1.25;
        }
    } else if (team == 'Brazil') {
        if (souvenir == 'flags') {
            priceSouvenir = 4.20;
        } else if (souvenir == 'caps') {
            priceSouvenir = 8.50;
        } else if (souvenir == 'posters') {
            priceSouvenir = 5.35;
        } else if (souvenir == 'stickers') {
            priceSouvenir = 1.20;
        }
    } else if (team == 'Croatia') {
        if (souvenir == 'flags') {
            priceSouvenir = 2.75;
        } else if (souvenir == 'caps') {
            priceSouvenir = 6.90;
        } else if (souvenir == 'posters') {
            priceSouvenir = 4.95;
        } else if (souvenir == 'stickers') {
            priceSouvenir = 1.10;
        }
    } else if (team == 'Denmark') {
        if (souvenir == 'flags') {
            priceSouvenir = 3.10;
        } else if (souvenir == 'caps') {
            priceSouvenir = 6.50;
        } else if (souvenir == 'posters') {
            priceSouvenir = 4.80;
        } else if (souvenir == 'stickers') {
            priceSouvenir = 0.90;
        }
    }
    if (priceSouvenir != 0) {
        amount = priceSouvenir * countSouvenir;
        console.log('Pepi bought ' + countSouvenir + ' ' + souvenir + ' of ' + team + ' for ' + amount.toFixed(2) + ' lv.');
    }
    if (team != 'Argentina' && team != 'Brazil' && team != 'Croatia' && team != 'Denmark') {
        console.log('Invalid country!');
    }
    if (souvenir != 'flags' && souvenir != 'caps' && souvenir != 'posters' && souvenir != 'stickers') {
        console.log('Invalid stock!')
    }
}
//FootballSouvenirs(['Brazil', 'stickers', 5])
//FootballSouvenirs(['Denmark', 'caps', 8])
//FootballSouvenirs(['Croatia', 'flags', 13])
FootballSouvenirs(['USA', 'caps', 8])
//FootballSouvenirs(['Argentina', 'shirts', 35])