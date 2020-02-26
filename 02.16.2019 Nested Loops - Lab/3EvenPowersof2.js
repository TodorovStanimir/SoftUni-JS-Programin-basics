function EvenPowersof2(input) {
    let n = Number(input.shift());
    let number = 1;
    for (let i = 0; i <= n; i += 2) {
        for (let y = 1; y <= i; y++) {
            number = number * 2
        }
        console.log(number);
        number = 1
    }
}
EvenPowersof2([5])