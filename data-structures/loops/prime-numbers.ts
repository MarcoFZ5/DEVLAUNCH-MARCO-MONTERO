
const isPrime = (n: number) => {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

const printPrimes = (final: number) => {
    for (let i = 2; i < final; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}

const printTwinPrimes = (final: number) => {
    for (let i = 2; i < final - 2; i++) {
        if (isPrime(i) && isPrime(i + 2)) {
            console.log(`(${i}, ${i + 2})`)
        }
    }
}

printTwinPrimes(20)