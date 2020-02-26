function Exam(input) {

    let numberOfStudents = parseInt(input[0]);
    let currentGrade = 0.00;

    //initial persents for each grade and avarage grade
    let p2299 = 0.00;
    let p3399 = 0.00
    let p4499 = 0.00;
    let p5599 = 0.00;
    let avarageGrade = 0.00;


    for (let i = 1; i <= numberOfStudents; i++) {
        currentGrade = Number(input[i]);
        avarageGrade += currentGrade;
        if (2 <= currentGrade && currentGrade <= 2.99) {
            p2299++;
        } else if (2.99 < currentGrade && currentGrade <= 3.99) {
            p3399++;
        } else if (3.99 < currentGrade && currentGrade <= 4.99) {
            p4499++;
        } else if (4.99 < currentGrade && currentGrade <= 6.00) {
            p5599++;
        }
    }
    console.log(`Top students: ${((p5599/numberOfStudents)*100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((p4499/numberOfStudents)*100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((p3399/numberOfStudents)*100).toFixed(2)}%`);
    console.log(`Fail: ${((p2299/numberOfStudents)*100).toFixed(2)}%`);
    console.log(`Average: ${(avarageGrade/numberOfStudents).toFixed(2)}`);
}
Exam([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5])
Exam([6, 2, 3, 4, 5, 6, 2.2])