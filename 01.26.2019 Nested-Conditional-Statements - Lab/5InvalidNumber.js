function InvalidNumber(input) {

    let chislo = parseInt(input.shift());

    if (chislo === 0 || (100 <= chislo && chislo <= 200)) {} else console.log('Invalid');
}
InvalidNumber(['220'])