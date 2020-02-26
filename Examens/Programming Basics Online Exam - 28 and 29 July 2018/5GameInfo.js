function GameInfo(input) {

    let nameTeam = String(input.shift());
    let countMatches = parseInt(input.shift());
    let currentProdalzhitelnost = 0;
    let matchesSPraodalzheniya = 0;
    let matchesSDuzpu = 0;
    let totalMinutes = 0;
    let middleProdalzhitelnost = 0;


    for (let i = 0; i < countMatches; i++) {
        currentProdalzhitelnost = parseInt(input.shift());
        totalMinutes += currentProdalzhitelnost;
        if (currentProdalzhitelnost > 90) {
            matchesSPraodalzheniya++;
        }
        if (currentProdalzhitelnost > 120) {
            matchesSDuzpu++;
            matchesSPraodalzheniya--;
        }
    }
    middleProdalzhitelnost = totalMinutes / countMatches;
    console.log(nameTeam + ' has played ' + totalMinutes + ' minutes. Average minutes per game: ' + middleProdalzhitelnost.toFixed(2));
    console.log('Games with penalties: ' + matchesSDuzpu);
    console.log('Games with additional time: ' + matchesSPraodalzheniya);
}
GameInfo(['England', 3, 95, 115, 123])
GameInfo(['Croatia', 4, 93, 90, 120, 125])