function bonustochki(input) {

    let tochki = Number(input.shift());
    let bonus = 0.0
    if (tochki <= 100) {
        bonus = 5;
    } else if (tochki <= 1000) {
        bonus = parseFloat(tochki * 0.20);
    } else {
        bonus = parseFloat(tochki * 0.10);
    }
    if (tochki % 2 === 0) {
        bonus = bonus + 1;
    } else if (tochki % 10 === 5) {
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(tochki + bonus);
}

bonustochki([20]);
bonustochki([175]);
bonustochki([2703]);
bonustochki([15875]);