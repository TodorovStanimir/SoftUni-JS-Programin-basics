function WeddingHall(input) {
    let lenghtHall = parseFloat(input[0]);
    let widthHall = parseFloat(input[1]);
    let siteBar = parseFloat(input[2]);

    let sizeBar = siteBar * siteBar;
    let sizeHall = lenghtHall * widthHall;
    let sizeDansing = 0.19 * sizeHall;
    let usebleSizeHall = sizeHall - sizeBar - sizeDansing;
    let countPeople = Math.ceil(usebleSizeHall / 3.2);

    console.log(countPeople);
}
WeddingHall([50, 25, 2])
WeddingHall([70, 20, 4])