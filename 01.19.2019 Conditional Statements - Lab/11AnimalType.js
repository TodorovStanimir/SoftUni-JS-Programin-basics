function AnimalType(input) {
    let type = String(input.shift()).toLowerCase();
    switch (type) {
        case 'dog':
            console.log('mammal');
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            console.log('reptile');
            break;
        default:
            console.log('unknown');
            break;
    }
}
AnimalType(['aaatoise']);