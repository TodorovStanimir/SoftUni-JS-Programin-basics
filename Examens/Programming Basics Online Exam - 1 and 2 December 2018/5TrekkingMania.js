function TrekkingMania(input) {
    let numberOfGroups = parseInt(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let currentP = 0;
    let totalPeople=0;

    for (let i = 1; i <= numberOfGroups; i++) {
        currentP = Number(input[i]);
        totalPeople += currentP;

        if (currentP <= 5) {
            p1 += currentP;
        } else if (currentP <= 12) {
            p2 += currentP;
        } else if (currentP <= 25) {
            p3 += currentP;
        } else if (currentP <= 40) {
            p4 += currentP;
        } else if (currentP > 40) {
            p5 += currentP;
        }
    }
    console.log((p1 / totalPeople * 100).toFixed(2)+'%');
    console.log((p2 / totalPeople * 100).toFixed(2)+'%');
    console.log((p3 / totalPeople * 100).toFixed(2)+'%');
    console.log((p4 / totalPeople * 100).toFixed(2)+'%');
    console.log((p5 / totalPeople * 100).toFixed(2)+'%');

}
TrekkingMania([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78])