function FruitOrVegetable(input) {
    let nameOfProduct = String(input.shift()).toLowerCase();
    let typeOfProduct = '';
    if (nameOfProduct === 'banana' ||
        nameOfProduct === 'apple' ||
        nameOfProduct === 'kiwi' ||
        nameOfProduct === 'cherry' ||
        nameOfProduct === 'lemon' ||
        nameOfProduct === 'grapes') {
        typeOfProduct = 'fruit';
    } else if (nameOfProduct === 'tomato' ||
        nameOfProduct === 'cucumber' ||
        nameOfProduct === 'pepper' ||
        nameOfProduct === 'carrot') {
        typeOfProduct = 'vegetable'
    } else typeOfProduct = 'unknown'
    console.log(typeOfProduct);
}
FruitOrVegetable(['tomat'])