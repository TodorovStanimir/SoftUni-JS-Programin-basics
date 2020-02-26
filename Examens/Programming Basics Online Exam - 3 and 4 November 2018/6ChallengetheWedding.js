function ChallengetheWedding(input) {
    let countMan = parseInt(input.shift());
    let countWomen = parseInt(input.shift());
    let maxTables = parseInt(input.shift());
    let result = '';
    let counttable = 0;


    for (let man = 1; man <= countMan; man++) {
        for (let women = 1; women <= countWomen; women++) {
            if (counttable > 0) {
                result += ' ';
            }
            result += '(' + man + ' <-> ' + women + ')';
            counttable++;
            if (counttable == maxTables) {
                break;
            }
        }
        if (counttable == maxTables) {
            break;
        }
    }
    console.log(result);
}
ChallengetheWedding([2, 2, 6])
ChallengetheWedding([2, 2, 3])