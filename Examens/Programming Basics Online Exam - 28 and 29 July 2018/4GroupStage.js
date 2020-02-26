function GroupStage(input) {

    let nameTeam = String(input.shift());
    let countMatches = parseInt(input.shift());
    let vkaraniGolove = 0;
    let polucheniGolove = 0;
    let tochki = 0;
    let obshtoVkaraniGolove = 0;
    let obshtoPolucheniGolove = 0;

    for (let i = 0; i < countMatches; i++) {
        vkaraniGolove = parseInt(input.shift());
        polucheniGolove = parseInt(input.shift());
        obshtoVkaraniGolove += vkaraniGolove;
        obshtoPolucheniGolove += polucheniGolove;
        if (vkaraniGolove > polucheniGolove) {
            tochki += 3;
        } else if (vkaraniGolove == polucheniGolove) {
            tochki += 1;
        }
    }

    if (obshtoVkaraniGolove >= obshtoPolucheniGolove) {
        console.log(nameTeam + ' has finished the group phase with ' + tochki + ' points.');
        console.log('Goal difference: ' + (obshtoVkaraniGolove - obshtoPolucheniGolove) + '.');
    } else {
        console.log(nameTeam + ' has been eliminated from the group phase.');
        console.log('Goal difference: ' + (obshtoVkaraniGolove - obshtoPolucheniGolove) + '.');
    }
}
GroupStage(['Brazil', 3, 4, 2, 0, 0, 1, 1, ])
GroupStage(['Germany', 2, 0, 2, 1, 3])
GroupStage(['Croatia', 4, 3, 2, 1, 1, 2, 0, 2, 1])