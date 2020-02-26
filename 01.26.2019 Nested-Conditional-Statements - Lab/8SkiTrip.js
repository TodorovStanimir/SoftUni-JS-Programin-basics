function SkiTrip(input) {

    let dniZaPrestoi = Number(input.shift());
    let vidPomeshtenie = String(input.shift()).toLowerCase();
    let otsenca = String(input.shift()).toLowerCase();
    let discountZaPrestoi = 0.00;
    let price = 0.00;
    let cenaZaVecher = 0.00;
    let discountZaOtsenka = 0.00;

    if ((0 <= dniZaPrestoi && dniZaPrestoi < 10) && vidPomeshtenie === 'apartment') {
        discountZaPrestoi = 30;
    } else if ((10 <= dniZaPrestoi && dniZaPrestoi <= 15) && vidPomeshtenie === 'apartment') {
        discountZaPrestoi = 35;
    } else if (dniZaPrestoi > 15 && vidPomeshtenie === 'apartment') {
        discountZaPrestoi = 50;
    } else if ((0 <= dniZaPrestoi && dniZaPrestoi < 10) && vidPomeshtenie === 'president apartment') {
        discountZaPrestoi = 10;
    } else if ((10 <= dniZaPrestoi && dniZaPrestoi <= 15) && vidPomeshtenie === 'president apartment') {
        discountZaPrestoi = 15;
    } else if (dniZaPrestoi > 15 && vidPomeshtenie === 'president apartment') {
        discountZaPrestoi = 20;
    }
    if (vidPomeshtenie === 'room for one person') {
        cenaZaVecher = 18.00;
    } else if (vidPomeshtenie === 'apartment') {
        cenaZaVecher = 25.00;
    } else if (vidPomeshtenie === 'president apartment') {
        cenaZaVecher = 35.00;
    }
    price = cenaZaVecher * (dniZaPrestoi - 1);
    price -= (discountZaPrestoi / 100) * price;

    if (otsenca === 'positive') {
        discountZaOtsenka = 25.00;
        price += (discountZaOtsenka / 100) * price;
        console.log(price.toFixed(2));
    } else if (otsenca === 'negative') {
        discountZaOtsenka = 10.00
        price -= (discountZaOtsenka / 100) * price;
        console.log(price.toFixed(2));
    }
}
SkiTrip([12, 'room for one person', 'positive'])