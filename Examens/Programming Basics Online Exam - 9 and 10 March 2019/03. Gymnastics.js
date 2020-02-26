function Gymnastics(input) {
    let country = String(input.shift());
    let ured = String(input.shift());
    let trudnost = 0.00;
    let izpalnenie = 0.00;

    if (country == 'Russia') {
        if (ured == 'ribbon') {
            trudnost = 9.100;
            izpalnenie = 9.400;
        } else if (ured == 'hoop') {
            trudnost = 9.300;
            izpalnenie = 9.800;
        } else if (ured == 'rope') {
            trudnost = 9.600;
            izpalnenie = 9.000;
        }
    } else if (country == 'Bulgaria') {
        if (ured == 'ribbon') {
            trudnost = 9.600;
            izpalnenie = 9.400;
        } else if (ured == 'hoop') {
            trudnost = 9.550;
            izpalnenie = 9.750;
        } else if (ured == 'rope') {
            trudnost = 9.500;
            izpalnenie = 9.400;
        }
    } else if (country == 'Italy') {
        if (ured == 'ribbon') {
            trudnost = 9.200;
            izpalnenie = 9.500;
        } else if (ured == 'hoop') {
            trudnost = 9.450;
            izpalnenie = 9.3500;
        } else if (ured == 'rope') {
            trudnost = 9.700;
            izpalnenie = 9.150;
        }
    }

    let finalgrade = trudnost + izpalnenie;
    let percent = 100 - finalgrade / 20 * 100;

    console.log(`The team of ${country} get ${finalgrade.toFixed(3)} on ${ured}.`);
    console.log(`${percent.toFixed(2)}%`);
}