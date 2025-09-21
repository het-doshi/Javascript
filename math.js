var addDigits = function(num) {
    
    while (num >= 10) {
        let sum = 0;

        while (num > 0) {
            let n = num % 10; 
            sum += n;         
            num = Math.floor(num / 10); 
        }

        num = sum; 
    }
    
    return num;       
};

// to any currency representation var.toLocalString('en-IN')

// genrate random number -> math.floor(math.random() * (max-min+1) + min)

// factor -> leetcode 


var isUgly = function (n) {

    factors = []
    primeNumbers = []
    fa = []

    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
            factors.push(i)
            console.log(i)
        }
    }


    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    primeNumbers = factors.filter(isPrime);
    fa = primeNumbers.filter(x => x !== 2 && x !== 3 && x !== 5);
    console.log(fa.length)

    if (fa.length >= 1) {
        return false;
    }
    else {
        return true
    }

};

// optimized one

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    // Ugly numbers must be positive
    if (n <= 0) return false;

    // Keep dividing n by 2, 3, or 5 if it's divisible
    while (n % 2 === 0) n /= 2;
    while (n % 3 === 0) n /= 3;
    while (n % 5 === 0) n /= 5;

    // If n is reduced to 1, it is an ugly number
    return n === 1;
};



// gray code conversion 
var grayCode = function(n) {
    
    range = Math.pow(2, n)
    gray = []

    for(i = 0; i < range; i++)
    {
        let grayValue = i ^ (i >> 1);
        gray.push(grayValue)
    }
    
    return gray
};

grayCode(2);

