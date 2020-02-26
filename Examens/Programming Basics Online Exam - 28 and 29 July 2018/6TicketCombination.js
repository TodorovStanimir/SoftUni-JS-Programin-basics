function TicketCombination(input) {
    let n = parseInt(input.shift());
    let item = 0
    let count = 0;
    for (let d1 = 66; d1 <= 76; d1 += 2) {

        for (let d2 = 102; d2 >= 97; d2--) {

            for (let d3 = 65; d3 <= 67; d3++) {

                for (let d4 = 1; d4 <= 10; d4++) {

                    for (let d5 = 10; d5 >= 1; d5--) {
                        item = d1 + d2 + d3 + d4 + d5;
                        count++
                        if (count == n) {
                            console.log(`Ticket combination: ${String.fromCharCode(d1)}${String.fromCharCode(d2)}${String.fromCharCode(d3)}${d4}${d5}`);
                            console.log(`Prize: ${item} lv.`);
                            break;
                        }
                    }

                }
            }

        }
    }
}
TicketCombination([17])
TicketCombination([2568])
TicketCombination([7589])