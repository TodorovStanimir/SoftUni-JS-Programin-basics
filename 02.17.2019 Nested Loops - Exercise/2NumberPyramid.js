//function NumberPyramid(input) {
//    let num = Number(input.shift())
//    let col = 1
//    let output = ''
//    let qurentNumber = 1
//    while (qurentNumber <= num) {
//        for (let i = 1; i <= col; i++) {
//           output += qurentNumber + ' ';
//            qurentNumber++;
//            if (qurentNumber > num) {
//                break;
//            }
//        }
//        console.log(output);
//        col++;
//        output = '';
//    }
//}
//NumberPyramid([12])

function NumberPyramid(input) {
    let num = Number(input.shift())
    isBool = false;
    qurrent = 1;
    let output = ''
    for (let row = 1; row <= num; row++) {
        for (let col = 1; col <= row; col++) {
            if (qurrent > num) {
                isBool = true;
                break;
            }
            output += qurrent + ' ';
            qurrent++;
        }
        console.log(output);
        output = '';
        if (isBool) {
            break;
        }
    }
}
NumberPyramid([12])