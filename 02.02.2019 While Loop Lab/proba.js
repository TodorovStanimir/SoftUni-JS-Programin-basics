function solve(input) {
    let day = Number(input.shift());
    let type = input.shift();
    let rating = input.shift();
    let price = 0;
    let nights = day - 1;
    if (type == "room for one person") {
        price = nights * 18;
    }
    if (type == "apartment") {
        if (nights <= 10) {
            price = Math.abs((nights * 25) * 0.30 - (nights*25))
        }
        if (nights>10 && nights <= 15) {
            price = Math.abs((nights * 25) * 0.35 - (nights * 25))
        }
        if (nights > 15) {
            price = Math.abs((nights * 25) * 0.50 - (nights * 25))
        }
    }
    if (type == "president apartment") {
        if (nights <= 10) {
            price = Math.abs((nights * 35) * 0.1 - (nights * 35))
        }
        if (nights>10 && nights <= 15) {
            price = Math.abs((nights * 35) * 0.15 - (nights * 35))
        }
        if (nights > 15) {
            price = Math.abs((nights * 35) * 0.20 - (nights * 35))
        }
    }
    if (rating == "positive") {
        console.log((price + (price * 0.25)).toFixed(2))
    } else if (rating == "negative") {
        console.log((price - (price * 0.1)).toFixed(2))
    }
}


solve([2, "apartment", "positive"])