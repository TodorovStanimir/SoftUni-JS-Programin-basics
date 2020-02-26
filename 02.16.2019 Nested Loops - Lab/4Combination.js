function Combination(input) {
    let n = Number(input.shift());
    let count = 0;

    for (let d1 = 0; d1 <= n; d1++) {
        for (let d2 = 0; d2 <= n; d2++) {
            for (let d3 = 0; d3 <= n; d3++) {
                for (let d4 = 0; d4 <= n; d4++) {
                    for (let d5 = 0; d5 <= n; d5++) {
                        if ((d1 + d2 + d3 + d4 + d5) == n) {
                            count++
                        }

                    }
                }
            }
        }
    }
    console.log(count);
}
Combination([20])