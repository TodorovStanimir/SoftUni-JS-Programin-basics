function PointonRectangleBorder(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());
    let Condition1 = 'False';
    let Condition2 = 'False';


    if ((x === x1 || x === x2) && (y1 <= y && y <= y2)) {
        Condition1 = 'True';
    } else if ((y === y1 || y === y2) && (x1 <= x && x <= x2)) {
        Condition2 = 'True';
    }

    if (Condition1 === 'True' || Condition2 === 'True') {
        console.log('Border');
    } else console.log('Inside / Outside')
}
PointonRectangleBorder([2, -3, 12, 3, 10, 3])