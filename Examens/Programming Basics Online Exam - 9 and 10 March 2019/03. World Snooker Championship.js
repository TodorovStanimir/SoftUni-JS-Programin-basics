function WorldSnookerChampionship(input) {
    let etap = String(input.shift());
    let kindTicket = String(input.shift());
    let quantityTickets = parseInt(input.shift());
    let IsPucturesWithCoup = String(input.shift());
    let priceTicket = 0;

    if (etap == 'Quarter final') {
        if (kindTicket == 'Standard') {
            priceTicket = 55.50;
        } else if (kindTicket == 'Premium') {
            priceTicket = 105.20;
        } else if (kindTicket == 'VIP') {
            priceTicket = 118.90;
        }
    } else if (etap == 'Semi final') {
        if (kindTicket == 'Standard') {
            priceTicket = 75.88;
        } else if (kindTicket == 'Premium') {
            priceTicket = 125.22;
        } else if (kindTicket == 'VIP') {
            priceTicket = 300.40;
        }
    } else if (etap == 'Final') {
        if (kindTicket == 'Standard') {
            priceTicket = 110.10;
        } else if (kindTicket == 'Premium') {
            priceTicket = 160.66;
        } else if (kindTicket == 'VIP') {
            priceTicket = 400.00;
        }
    }

    let totalPrice = priceTicket * quantityTickets;
    if (totalPrice > 4000) {
        totalPrice -= 0.25 * totalPrice
        IsPucturesWithCoup = 'N'
    } else if (totalPrice > 2500) {
        totalPrice -= 0.1 * totalPrice
    }
    if (IsPucturesWithCoup == 'Y') {
        totalPrice += 40 * quantityTickets;
    }
    console.log(totalPrice.toFixed(2));
}
WorldSnookerChampionship(['Final', 'Premium', 25, 'Y'])
WorldSnookerChampionship(['Semi final', 'VIP', 9, 'Y'])
WorldSnookerChampionship(['Quarter final', 'Standard', 11, 'N'])