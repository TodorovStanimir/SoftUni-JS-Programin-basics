function SafePasswordsGenerator(input) {

    let a = parseInt(input.shift());
    let b = parseInt(input.shift());
    let maxCountPasswords = parseInt(input.shift());
    let d1 = 35;
    let d2 = 64;
    let item = '';
    let countitems = 0;


    for (let d3 = 1; d3 <= a; d3++) {
        for (let d4 = 1; d4 <= b; d4++) {
            if (d1 > 55) {
                d1 = 35;
            }
            if (d2 > 96) {
                d2 = 64;
            }
            item += String.fromCharCode(d1) + String.fromCharCode(d2) + d3 + d4 + String.fromCharCode(d2) + String.fromCharCode(d1) + '|';
            d1++
            d2++
            countitems++
            if (countitems == maxCountPasswords) {
                break;
            }
        }
        if (countitems == maxCountPasswords) {
            break;
        }
    }
    console.log(item);
}
SafePasswordsGenerator([20, 50, 10])