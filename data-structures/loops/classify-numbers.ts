const numberToReach: number = 100

const isEven = (n: number): boolean => {
    return ((n % 2) == 0)
}

for (let i = 0; i <= numberToReach; i++) {
    if (isEven(i)) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
}