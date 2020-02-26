function Building(input) {
    let numberFloor = Number(input.shift());
    let numberRooms = Number(input.shift());
    let item = '';

    for (let floor = numberFloor; floor >= 1; floor--) {
        for (let rooms = 0; rooms < numberRooms; rooms++) {
            if (numberFloor == 1) {
                item += 'L' + floor + rooms + ' ';
            } else {
                if (numberFloor == floor) {
                    item += 'L' + floor + rooms + ' ';
                } else {
                    if (floor % 2 != 0) {
                        item += 'A' + floor + rooms + ' ';
                    }
                    if (floor % 2 == 0) {
                        item += 'O' + floor + rooms + ' ';
                    }
                }
            }
        }
        console.log(item);
        item = '';
    }
}
Building([1, 4])