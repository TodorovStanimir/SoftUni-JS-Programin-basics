function cinema(input) {

    let vidProzhekcia = String(input.shift()).toLowerCase();
    let redove = Number(input.shift());
    let koloni = Number(input.shift());
    let priceperticket = 0.00
    let price = 0.00;

    switch (vidProzhekcia) {
        case 'premiere':
            priceperticket = 12.00;
            break;
        case 'normal':
            priceperticket = 7.50;
            break;
        case 'discount':
            priceperticket = 5.00;
            break;
    }

    price = redove * koloni * priceperticket;
    console.log(price.toFixed(2)+' leva');

}
cinema(['Discount', 12, 30])