function proba1(input) {
    let nameTournir = String(input.shift());
    let numberMachs = 0;
    let pointDesiTeam = 0;
    let pointOtherTeam = 0;
    let winsMachs = 0;
    let losesMachs = 0

    while (nameTournir != 'End of tournaments') {
        numberMachs = parseInt(input.shift());
        for (let i = 1; i <= numberMachs; i++) {
            pointDesiTeam = parseInt(input.shift());
            pointOtherTeam = parseInt(input.shift());
            if (pointDesiTeam > pointOtherTeam) {
                let difference = pointDesiTeam - pointOtherTeam;
                console.log(`Game ${i} of tournament ${nameTournir}: win with ${difference} points.`);
                winsMachs++;
            } else {
                let difference = pointOtherTeam - pointDesiTeam;
                console.log(`Game ${i} of tournament ${nameTournir}: lost with ${difference} points.`);
                losesMachs++;
            }
        }
        nameTournir = String(input.shift());
    }
    let percentWins = winsMachs / (winsMachs + losesMachs) * 100;
    let persentLoses = losesMachs / (winsMachs + losesMachs) * 100;
    console.log(`${percentWins.toFixed(2)}% matches win`);
    console.log(`${persentLoses.toFixed(2)}% matches lost`);
}