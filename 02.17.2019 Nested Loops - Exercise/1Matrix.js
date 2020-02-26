function Matrix(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());

    for (let d1 = a; d1 <= b; d1++) {
        for (let d2 = a; d2 <= b; d2++) {
            for (let d3 = c; d3 <= d; d3++) {
                for (let d4 = c; d4 <= d; d4++) {
                    if (d1 + d4 == d2 + d3 && d1 != d2 && d3 != d4) {
                        console.log(`${d1}${d2}`);
                        console.log(`${d3}${d4}`);
                        console.log();
                    }
                }
            }
        }
    }
}
//Matrix([1, 2, 3, 4])
Matrix([2, 4, 4, 5])