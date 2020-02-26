function ConcatenateDate(input) {
    let firstName = String(input.shift());
    let secondName = String(input.shift());
    let age = parseInt(input.shift());
    let town = String(input.shift());

    console.log(`You are ${firstName} ${secondName}, a ${age}-years old person from ${town}.`);
}
ConcatenateDate(['Ivan', 'Ivanov', 20, 'Sofia'])