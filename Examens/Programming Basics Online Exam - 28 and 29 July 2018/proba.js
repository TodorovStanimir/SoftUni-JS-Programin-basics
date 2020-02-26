function proba(input) {
    let num = parseInt(input.shift());
    let counter = 0;
    let price = 0;
    let output = '';

    for (let d1 = 66; d1 <= 76; d1+=2) {
        for (let d2 = 102; d2 >= 97; d2--) {
            for (let d3 = 65; d3 <= 67; d3++) {
                for (let d4 = 1; d4 <= 10; d4++) {
                    for (let d5 = 10; d5 >= 1; d5--) {
                        counter++;
                        if (counter == num) {
                            output = String.fromCharCode(d1) + String.fromCharCode(d2) + String.fromCharCode(d3) + d4 + d5;
                            price = d1 + d2 + d3 + d4 + d5;
                            console.log(`Ticket combination: ${output}`);
                            console.log(`Prize: ${price} lv.`);
                        }
                    }
                }
            }
        }
    }
}
proba([7589])
//proba(['Germany', 2, 0, 2, 1, 3])
//proba(['Croatia', 4, 3, 2, 1, 1, 2, 0, 2, 1])