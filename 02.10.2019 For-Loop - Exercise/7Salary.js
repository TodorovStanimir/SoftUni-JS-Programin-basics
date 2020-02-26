function Salary(input) {

    let counter = Number(input[0]) + 1;
    let monthSalary = Number(input[1]);
    let site = '';

    for (let i = 2; i <= counter; i++) {
        sait = String(input[i]).toLowerCase(2);
        if (sait === 'facebook') {
            monthSalary -= 150;
        }
        if (sait === 'instagram') {
            monthSalary -= 100;
        }
        if (sait === 'reddit') {
            monthSalary -= 50;
        }
        if (monthSalary <= 0) {
            break;
        }
    }
    if (monthSalary <= 0) {
        console.log('You have lost your salary.');
    } else {
        console.log(Math.trunc(monthSalary));
    }
}
Salary([3, 500, 'Facebook', 'Dev.bg', 'sInstagram', 'Facebook', 'Reddit', 'Facebook', 'Facebook'])