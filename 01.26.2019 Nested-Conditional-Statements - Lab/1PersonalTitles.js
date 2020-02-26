function PersonalTitles(input) {
    let years = Number(input.shift());
    let pol = String(input.shift()).toLowerCase();
    if (pol === 'm') {
        if (years >= 16) {
            console.log('Mr.');
        } else console.log('Master');
    }

    if (pol === 'f') {
        if (years >= 16) {
            console.log('Ms.');
        } else console.log('Miss');
    }
}

PersonalTitles([12,'f'])
PersonalTitles([17, 'm'])
PersonalTitles([25, 'f'])
PersonalTitles([13.5, 'm'])