function MagicNumbers(input) {
    let n = parseInt(input.shift());

    let result = '';

    for (let d1 = 1; d1 <= 9; d1++) {
        for (let d2 = 1; d2 <= 9; d2++) {
            for (let d3 = 1; d3 <= 9; d3++) {
                for (let d4 = 1; d4 <= 9; d4++) {
                    for (let d5 = 1; d5 <= 9; d5++) {
                        for (let d6 = 1; d6 <= 9; d6++) {
                            if (d1 * d2 * d3 * d4 * d5 * d6 == n) {
                                result += d1 + '' + d2 + '' + d3 + '' + d4 + '' + d5 + '' + d6 + ' ';
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
//MagicNumbers([2])
//MagicNumbers([8])
MagicNumbers([531441])