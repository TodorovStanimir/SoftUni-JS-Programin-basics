function Profit(input) {
    let countMoneti1Leva = parseInt(input.shift());
    let countMoneti2Leva = parseInt(input.shift());
    let countBanknoti5Leva = parseInt(input.shift());
    let profit = parseInt(input.shift());

    for (let moneti1lev = 0; moneti1lev <= countMoneti1Leva; moneti1lev++) {
        for (let moneti2lev = 0; moneti2lev <= countMoneti2Leva; moneti2lev++) {
            for (let banknoti5lev = 0; banknoti5lev <= countBanknoti5Leva; banknoti5lev++) {
                if ((moneti1lev * 1 + moneti2lev * 2 + banknoti5lev * 5) == profit) {
                    console.log(`${moneti1lev} * 1 lv. + ${moneti2lev} * 2 lv. + ${banknoti5lev} * 5 lv. = ${profit} lv.`)
                }
            }
        }
    }
}
Profit([3, 2, 3, 10])
Profit([5, 3, 1, 7])