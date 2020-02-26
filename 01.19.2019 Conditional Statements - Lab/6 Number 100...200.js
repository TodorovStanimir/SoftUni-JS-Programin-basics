function numbers100to200([arg1]) {
    let a = parseInt(arg1);
    if (a < 100) {
        console.log('Less than 100');
    } else if (a <= 200) {
        console.log('Between 100 and 200');
    } else if (a > 200) {
        console.log('Greater than 200');
    }
}

numbers100to200([201]);