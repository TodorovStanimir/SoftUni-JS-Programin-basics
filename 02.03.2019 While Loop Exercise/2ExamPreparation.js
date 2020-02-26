function ExamPreparation(input) {
    let numberOfNegativeGrades = Number(input.shift()); //maksimalen broj negatvni otsenki

    let averageGrade = 0.00; //sredna otsenka
    let numberOfProblems = 0; //broj otsenki
    let sumOfGrades = 0.00; //suma na wsichki otsenki
    let lastNameOfGrade = ''; //broj negativni otsenki
    let currentGrade = 0.00; //tekushta otsenka
    let currentNumberOfNegativeGrades = 0; //tekusht broj na negativnite otsenki
    let bool = true;


    while (bool) {
        let currentNameOfProblem = String(input.shift());
        if (currentNameOfProblem == 'Enough') {
            averageGrade = sumOfGrades / numberOfProblems;
            break;
        }
        lastNameOfGrade=currentNameOfProblem
        currentGrade = Number(input.shift());
        numberOfProblems++;
        sumOfGrades += currentGrade;

        if (currentGrade <= 4) {
            currentNumberOfNegativeGrades++;
        }
        if (currentNumberOfNegativeGrades == numberOfNegativeGrades) {
            bool = false;
        }
    }
    if (bool == false) {
        console.log(`You need a break, ${numberOfNegativeGrades} poor grades.`);
    } else {
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${lastNameOfGrade}`);
    }

}
ExamPreparation(['3', 'Money', '6', 'Story', '4', 'Spring Time', '5', 'Bus', '6', 'Enough'])