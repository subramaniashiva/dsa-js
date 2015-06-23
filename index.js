console.log('Prime number checker program');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//var putstr = require('putstr');
rl.question('Enter your number', function(answer) {
    console.log(isPrime(answer));
    rl.close();
});

function isPrime(number) {
    var prime = false,
        i, numSqrt = Math.sqrt(number);
    number = parseInt(number, 10);
    if (typeof number == 'undefined' || typeof number == null || isNaN(number)) {
        return prime;
    } else {
        for (i = 2; i <= numSqrt; i++) {
            if (number % i === 0) {
                return prime;
            }
        }
        return true;
    }
}