function equalsword([arg1, arg2]) {
    let word1 = arg1.toLowerCase();
    let word2 = arg2.toLowerCase();
    if (word1 === word2) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

equalsword(['Hello', 'Hello']);