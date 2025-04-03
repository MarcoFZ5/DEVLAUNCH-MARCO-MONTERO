
const zigZag = (n: number) => {
    const n2 = (n * n)
    let count = 1
    for (let i = 1; i <= n; i++) {
        let sequence = ''
        for (let j = 1; j <= n; j++) {
            if (i % 2 == 0) {
                sequence = (count + ' ') + sequence;
            } else {
                sequence += count + ' '
            }
            count++
        }
        console.log(sequence)
    }
}

// zigZag(3)

const piramid = (numberOfRows: number) => {
    let count = 1
    for (let i = 1; i <= numberOfRows; i++) {
        let piramid = ''
        for (let j = 1; j <= i; j++) {
            piramid += count + ' '
            count++
        }
        console.log(piramid)
    }
}

// piramid(4)

const invertedPiramid = (numberOfRows: number) => {
    let count = 1
    for (let i = numberOfRows; i >= 1; i--) {
        let invertedPiramid = ''
        for (let j = 1; j <= i; j++) {
            invertedPiramid += count + ' '
            count++
        }
        console.log(invertedPiramid)
    }
}

// invertedPiramid(4)

const diamond = (numberOfRows: number) => {
    let count = 1
    for (let i = 1; i <= numberOfRows; i++) {
        let numberOfSpaces = (numberOfRows - i)
        let diamond = ' '.repeat(numberOfSpaces)
        for (let j = 1; j <= i; j++) {
            diamond += ' ' + count
            count++
        }
        console.log(diamond)
    }
    count -= numberOfRows + 1
    for (let i = numberOfRows - 1; i >= 1; i--) {
        let numberOfSpaces = (numberOfRows - i)
        let diamond = ' '.repeat(numberOfSpaces)
        for (let j = 1; j <= i; j++) {
            diamond += ' ' + count
            count--
        }
        console.log(diamond)
    }
}

// diamond(4)

const esPar = (number: number) => {
    return number % 2 == 0
}

const esPrimo = (number: number) => {
    if (number <= 1) return false

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

const fizzBuzz = (number: number) => {
    for (let i = 1; i <= number; i++) {
        if (esPrimo(i)) {
            console.log(`${i} FizzBuzz`)
        } else if (esPar(i)) {
            console.log(`${i} Fizz`)
        } else {
            console.log(`${i} Buzz`)
        }
    }
}

// fizzBuzz(11)

const fizzBuzzAll = (number: number) => {
    for (let i = 1; i <= number; i++) {
        let isPrime = true
        if (i <= 1) {
            isPrime = false
        } else {
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    isPrime = false
                }
            }
        }

        if (isPrime) {
            console.log(`${i} FizzBuzz`)
        } else if (i % 2 == 0) {
            console.log(`${i} Fizz`)
        } else {
            console.log(`${i} Buzz`)
        }
    }
}

// fizzBuzzAll(11)

const Revert = (cadenaTxt: string) => {
    let revertedString = ''
    for (let i = cadenaTxt.length - 1; i >= 0; i--) {
        let tempLetter = cadenaTxt[i]
        revertedString += tempLetter
    }
    console.log(revertedString)
}

// Revert('Typescript')

const countDivisors = (number: number): number => {
    let counter: number = 0
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            counter++
        }
    }
    return counter
}

const factorial = (number: number): number => {
    let total: number = 1
    for (let i = number; i >= 1; i--) {
        total *= i
    }
    return total
}

console.log(factorial(5))