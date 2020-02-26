function PasswordGuess([arg1]) {

    let pass = arg1;
    if (pass === 's3cr3t!P@ssw0rd') {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}

PasswordGuess(['s3cr3t!P@ssw0rd']);