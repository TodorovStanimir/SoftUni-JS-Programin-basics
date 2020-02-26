function GameStatistics(input) {
    let minute = parseInt(input.shift());
    let name = String(input.shift());

    if (minute == 0) {
        console.log('Match has just began!');
    } else if (minute < 45) {
        console.log('First half time.');
    } else if (minute >= 45) {
        console.log('Second half time.');
    }
    if (minute >= 1 && minute <= 10) {
        console.log(name + ' missed a penalty.');
        if (minute % 2 == 0) {
            console.log(name + ' was injured after the penalty.');
        }
    } else if (minute > 10 && minute <= 35) {
        console.log(name + ' received yellow card.');
        if (minute % 2 != 0) {
            console.log(name + ' got another yellow card.');
        }
    } else if (minute > 35 && minute < 45) {
        console.log(name + ' SCORED A GOAL !!!');
    } else if (minute > 45 && minute <= 55) {
        console.log(name + ' got a freekick.');
        if (minute%2==0){
            console.log(name+' missed the freekick.');
        }
    } else if (minute > 55 && minute <= 80) {
        console.log(name + ' missed a shot from corner.');
        if (minute % 2 != 0) {
            console.log(name + ' has been changed with another player.');
        }
    } else if (minute > 80 && minute <= 90) {
        console.log(name + ' SCORED A GOAL FROM PENALTY !!!');
    }
}
GameStatistics([85, 'Harry Kane']);
GameStatistics([10, 'Messi'])
GameStatistics([25, 'Ronaldo'])