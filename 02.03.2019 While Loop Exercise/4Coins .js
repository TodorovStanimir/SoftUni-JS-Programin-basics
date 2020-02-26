function Coins(input) {
    let num = Number(input.shift()).toFixed(2);
    let countMoneti = 0;

    while (num > 0) {
        if (Math.floor(num) > 0 && Math.floor(num) % 2 == 0) {
            countMoneti = countMoneti + Math.floor(num) / 2;
            num = (num - Math.floor(num)).toFixed(2);
        }
        if (Math.floor(num) > 0 && Math.floor(num) % 2 != 0) {
            countMoneti++;
            num = (num - 1);
        }
        if (num >= 0.50 && num < 1) {
            countMoneti++;
            num = (num - 0.50).toFixed(2);
        }
        if (num >= 0.40 && num < 0.50) {
            countMoneti = countMoneti + 2;
            num = (num - 0.40).toFixed(2);
        }
        if (num >= 0.20 && num < 0.40) {
            countMoneti++;
            num = (num - 0.20).toFixed(2);
        }
        if (num >= 0.10 && num < 0.20) {
            countMoneti++;
            num = (num - 0.10).toFixed(2);
        }
        if (num >= 0.05 && num < 0.10) {
            countMoneti++;
            num = (num - 0.05).toFixed(2);
        }
        if (num >= 0.02 && num < 0.05) {
            countMoneti++;
            num = (num - 0.02).toFixed(2);
        }
        if (num == 0.01) {
            countMoneti++;
            num = (num - 0.01).toFixed(2);
        }
    }
    console.log(countMoneti);
}
Coins([2.73])