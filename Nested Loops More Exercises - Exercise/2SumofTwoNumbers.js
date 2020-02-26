function SumofTwoNumbers(input) {
    let beginingOfInterval = parseInt(input.shift());
    let finishingOfInterval = parseInt(input.shift());
    let magicNumber = parseInt(input.shift());
    let counter = 0;
    let foundCombination = false

    for (let d1 = beginingOfInterval; d1 <= finishingOfInterval; d1++) {
        for (let d2 = beginingOfInterval; d2 <= finishingOfInterval; d2++) {
            counter++
            if (d1 + d2 == magicNumber) {
                console.log(`Combination N:${counter} (${d1} + ${d2} = ${magicNumber})`);
                foundCombination = true;
                break;
            }
        }
        if (foundCombination) {
            break;
        }
    }
    if (!foundCombination) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}
//SumofTwoNumbers([1, 10, 5])
//SumofTwoNumbers([23,24,20])
SumofTwoNumbers([88,888,2000])