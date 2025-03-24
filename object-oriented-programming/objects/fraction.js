
const createFraction = (numerator, denominator) => {
    return {
        numerator,
        denominator
    }
}

const addFraction = (f1, f2) => {
    const numerator = (f1.numerator * f2.denominator) + (f1.denominator * f2.numerator)
    const denominator = (f1.denominator * f2.denominator)

    return createFraction(numerator, denominator)
}

const substractFraction = (f1, f2) => {
    const numerator = (f1.numerator * f2.denominator) - (f1.denominator * f2.numerator)
    const denominator = (f1.denominator * f2.denominator)

    return createFraction(numerator, denominator)
}

const multiplyFraction = (f1, f2) => {
    const numerator = (f1.numerator * f2.numerator)
    const denominator = (f1.denominator * f2.denominator)

    return createFraction(numerator, denominator)
}

const divideFraction = (f1, f2) => {
    const numerator = (f1.numerator * f2.denominator)
    const denominator = (f1.denominator * f2.numerator)

    return createFraction(numerator, denominator)
}

const createFractionWithFunctions = (numerator, denominator) => {
    const f1 = createFraction(numerator, denominator)

    return {
        ...f1,
        addFraction: (f2) => addFraction(f1, f2),
        substractFraction: (f2) => substractFraction(f1, f2),
        multiplyFraction: (f2) => multiplyFraction(f1, f2),
        divideFraction: (f2) => divideFraction(f1, f2)
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

console.log(fraction3.addFraction(fraction4))
console.log(fraction3.substractFraction(fraction4))
console.log(fraction4.multiplyFraction(fraction3))
console.log(fraction4.divideFraction(fraction3))