function EqualPairs(input) {
    let counter = 2 * Number(input[0])
    let SumCurrentPairs = 0.00;
    let SumPreviousPairs = 0.00;
    let DifferenceCurrentPairs = 0.00;
    let MaxDifference = 0.00;

    for (let i = 1; i <= counter; i++) {
        if (i % 2 === 0) {
            SumCurrentPairs += Number(input[i]);
            if (i === 2) {
                SumPreviousPairs = SumCurrentPairs;
            }
            if (SumCurrentPairs - SumPreviousPairs != 0.00) {
                MaxDifference = Math.max(DifferenceCurrentPairs, Math.abs(SumCurrentPairs - SumPreviousPairs));
                DifferenceCurrentPairs = MaxDifference;
                SumPreviousPairs = SumCurrentPairs;
            }
            SumCurrentPairs = 0.00;
        } else {
            SumCurrentPairs += Number(input[i]);
        }
    }
    if (MaxDifference === 0) {
        console.log('Yes, value=' + SumPreviousPairs);
    } else {
        console.log('No, maxdiff=' + MaxDifference);
    }
}

EqualPairs([3, 1, 2, 0, 3, 4, -1])
EqualPairs([2, 1, 2, 2, 2])
EqualPairs([4, 1, 1, 3, 1, 2, 2, 0, 0])
EqualPairs([1, 5, 5])
EqualPairs([2, -1, 0, 0, -1])