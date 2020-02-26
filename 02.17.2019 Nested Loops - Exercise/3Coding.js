function Coding(input) {
    let item = String(input.shift());
    let subitem = '';

    for (let row = 1; row <= item.length; row++) {
        subitem = item.substr(item.length - row, 1);
        let asc = Number(subitem) + 33;
        if (asc == 33) {
            console.log('ZERO');
        } else
            console.log(String.fromCharCode(asc).repeat(subitem));
    }
}
Coding([2049])