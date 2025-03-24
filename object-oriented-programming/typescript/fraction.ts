
interface Fraction {
    numerator: number
    denominator: number
}

type FractionOperation = (f2: Fraction) => Fraction

interface FractionWithOperations extends Fraction {
    add: FractionOperation
    substract: FractionOperation
    Multiply: FractionOperation
    divide: FractionOperation
}

const createFraction = (numerator: number, denominator: number): Fraction => {
    return {
        numerator,
        denominator
    }
}

const addFraction = (f1: Fraction, f2: Fraction) => {
    const numerator = (f1.numerator * f2.denominator) + (f1.denominator * f2.numerator)
    const denominator = (f1.denominator * f2.denominator)

    return createFraction(numerator, denominator)
}

const substractFraction = (f1: Fraction, f2: Fraction) => {
    const numerator = (f1.numerator * f2.denominator) - (f1.denominator * f2.numerator)
    const denominator = (f1.denominator * f2.denominator)

    return createFraction(numerator, denominator)
}

const multiplyFraction = (f1: Fraction, f2: Fraction) => {
    const numerator = (f1.numerator * f2.numerator)
    const denominator = (f1.denominator * f2.denominator)

    return createFraction(numerator, denominator)
}

const divideFraction = (f1: Fraction, f2: Fraction) => {
    const numerator = (f1.numerator * f2.denominator)
    const denominator = (f1.denominator * f2.numerator)

    return createFraction(numerator, denominator)
}

const createFractionWithFunctions = (numerator: number, denominator: number): FractionWithOperations => {
    const f1 = createFraction(numerator, denominator)

    return {
        ...f1,
        add: (f2: Fraction) => addFraction(f1, f2),
        substract: (f2: Fraction) => substractFraction(f1, f2),
        Multiply: (f2: Fraction) => multiplyFraction(f1, f2),
        divide: (f2: Fraction) => divideFraction(f1, f2)
    }
}


const fraction1 = createFraction(3, 4)
const fraction2 = createFraction(2, 3)

console.log(addFraction(fraction1, fraction2))
console.log(substractFraction(fraction1, fraction2))
console.log(multiplyFraction(fraction1, fraction2))
console.log(divideFraction(fraction1, fraction2))

console.log('-----------------------------------------')

const fraction3 = createFractionWithFunctions(5, 6)
const fraction4 = createFractionWithFunctions(8, 3)

console.log(fraction3.add(fraction4))
console.log(fraction3.substract(fraction4))
console.log(fraction4.Multiply(fraction3))
console.log(fraction4.divide(fraction3))