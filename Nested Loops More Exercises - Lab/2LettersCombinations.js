function LettersCombinations(input) {
    let beginingLetter = String(input.shift());
    let finishingLetter = String(input.shift());
    let excludesLetter = String(input.shift());
    let counter = 0;
    let output = ''

    for (let d1 = beginingLetter.charCodeAt(0); d1 <= finishingLetter.charCodeAt(0); d1++) {
        for (let d2 = beginingLetter.charCodeAt(0); d2 <= finishingLetter.charCodeAt(0); d2++) {
            for (let d3 = beginingLetter.charCodeAt(0); d3 <= finishingLetter.charCodeAt(0); d3++) {
                if (d1 != excludesLetter.charCodeAt(0) && d2 != excludesLetter.charCodeAt(0) && d3 != excludesLetter.charCodeAt(0)) {
                    output += (`${String.fromCharCode(d1)}${String.fromCharCode(d2)}${String.fromCharCode(d3)} `);
                    counter++;
                }
            }
        }
    }
    console.log(`${output}${counter}`);
}
LettersCombinations(['a', 'c', 'z'])