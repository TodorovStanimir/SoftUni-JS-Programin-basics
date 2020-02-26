function SoftUniReception(input) {
    let emplouer1 = parseInt(input.shift());
    let emplouer2 = parseInt(input.shift());
    let emplouer3 = parseInt(input.shift());
    let studentCount = parseInt(input.shift());
    let answardStudents = emplouer1 + emplouer2 + emplouer3;
    let hours = 0;
    let hoursForReast = 0

    while (studentCount > 0) {

        if (studentCount >= answardStudents) {
            studentCount -= answardStudents;
            hours++;
            if (hours % 3 == 0 && studentCount != 0) {
                hoursForReast++;
            }
        } else {
            studentCount = 0;
            hours++;
        }
    }
    console.log(`Time needed: ${hours+hoursForReast}h.`);

}
//SoftUniReception([5, 6, 4, 20])
SoftUniReception([1, 2, 3, 45])
SoftUniReception([3, 2, 5, 40])