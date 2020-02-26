function OldBooks(input) {

    let askingBook = String(input.shift()).toLowerCase();
    let capacity = Number(input.shift());
    let i = 0;
    let BookIsFound = false;
    let currentBook = String(input.shift()).toLowerCase();
    
    while (i < capacity) {
        if (currentBook == askingBook) {
            BookIsFound = true;
            break;
        }
        i++;
        currentBook = String(input.shift()).toLowerCase();
    }
    if (BookIsFound == false) {
        console.log('The book you search is not here!');
        console.log(`You checked ${capacity} books.`);

    } else {
        console.log(`You checked ${i} books and found it.`);
    }
}
OldBooks(['The spot', 4, 'Hunger Games', 'Harry Poter', 'Torronto', 'Spotify'])
OldBooks(['Bourne', 32, 'True Story', 'Forever', 'More Space', 'The Girl', 'Spaceship', 'Strongest',
    'Profit', 'Tripple', 'Stella', 'The Matrix', 'Bourne'
])