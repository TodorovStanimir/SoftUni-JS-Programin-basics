function Cookiefactory(input) {
    let batches = Number(input.shift());

    for (let i = 1; i <= batches; i++) {
        isThereFlour = false;
        isThereEggs = false;
        isThereSugar = false;
        bakingBatch = false;
        let item = input.shift();
        while (!isThereFlour || !isThereEggs || !isThereSugar || !bakingBatch) {
            if (item == 'flour') {
                isThereFlour = true;
            } else if (item == 'eggs') {
                isThereEggs = true;
            } else if (item == 'sugar') {
                isThereSugar = true;
            } else if (item == 'Bake!') {
                if (isThereFlour && isThereEggs && isThereSugar) {
                    bakingBatch = true;
                    console.log(`Baking batch number ${i}...`);
                    continue;
                } else {
                    console.log('The batter should contain flour, eggs and sugar!');
                }
            }
            item = input.shift();
        }
    }
}
//Cookiefactory([2, 'flour', 'eggs', 'sugar', 'chocolate', 'Bake!', 'flour', 'eggs', 'sugar', 'caramel', 'peanuts', 'Bake!'])
Cookiefactory([4, 'flour', 'eggs', 'jam', 'Bake!', 'sugar', 'Bake!', 'flour', 'eggs', 'milk', 'almonds', 'sugar', 'Bake!', 'flour', 'eggs', 'sugar', 'Bake!'])