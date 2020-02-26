function CarNumber(input) {
    let beginingNumber = parseInt(input.shift());
    let excludesNumber = parseInt(input.shift());
    let output = '';

    for (let d1 = beginingNumber; d1 <= excludesNumber; d1++) {
        for (let d2 = beginingNumber; d2 <= excludesNumber; d2++) {
            for (let d3 = beginingNumber; d3 <= excludesNumber; d3++) {
                for (let d4 = beginingNumber; d4 <= excludesNumber; d4++) {
                    if (d1 % 2 == 0 && d4 % 2 != 0 && d1 > d4 && (d2 + d3) % 2 == 0) {
                        output += (`${d1}${d2}${d3}${d4} `);
                    } else if (d1 % 2 != 0 && d4 % 2 == 0 && d1 > d4 && (d2 + d3) % 2 == 0) {
                        output += (`${d1}${d2}${d3}${d4} `);
                    }
                }
            }
        }
    }
    console.log(output);
}
CarNumber([5,8])