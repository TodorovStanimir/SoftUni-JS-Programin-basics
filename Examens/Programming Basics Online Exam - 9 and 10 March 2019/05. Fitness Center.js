function FitnessCenter(input) {
    let num = parseInt(input.shift());
    let countBack = 0;
    let countChest = 0;
    let countLegs = 0;
    let countAbs = 0;
    let countExersize = 0;
    let countProteinShake = 0;
    let countProteinBar = 0;

    for (let i = 1; i <= num; i++) {
        let exersize = String(input.shift());
        if (exersize == 'Back') {
            countBack++;
            countExersize++;
        } else if (exersize == 'Chest') {
            countChest++;
            countExersize++;
        } else if (exersize == 'Legs') {
            countLegs++;
            countExersize++;
        } else if (exersize == 'Abs') {
            countAbs++;
            countExersize++;
        } else if (exersize == 'Protein shake') {
            countProteinShake++;
        } else if (exersize == 'Protein bar') {
            countProteinBar++;
        }
    }
    console.log(`${countBack} - back`);
    console.log(`${countChest} - chest`);
    console.log(`${countLegs} - legs`);
    console.log(`${countAbs} - abs`);
    console.log(`${countProteinShake} - protein shake`);
    console.log(`${countProteinBar} - protein bar`);
    console.log(`${(countExersize/num*100).toFixed(2)}% - work out`);
    console.log(`${(100-countExersize/num*100).toFixed(2)}% - protein`);
}
//FitnessCenter([10, 'Back', 'Chest', 'Legs', 'Abs', 'Protein shake', 'Protein bar', 'Protein shake', 'Protein bar', 'Legs', 'Abs'])
FitnessCenter([7, 'Chest', 'Back', 'Legs', 'Legs', 'Abs', 'Protein shake', 'Protein bar'])