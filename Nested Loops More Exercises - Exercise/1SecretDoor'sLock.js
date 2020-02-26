function SecretDoorsLock(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let num3 = Number(input.shift());

    for (let d1 = 1; d1 <= num1; d1++) {
        for (let d2 = 1; d2 <= num2; d2++) {
            for (let d3 = 1; d3 <= num3; d3++) {
                if (d3 % 2 == 0 && d1 % 2 == 0 && (d2 == 2 || d2 == 3 || d2 == 5 || d2 == 7)) {
                    console.log(`${d1} ${d2} ${d3}`);
                }
            }
        }
    }
}
SecretDoorsLock([3, 5, 5])