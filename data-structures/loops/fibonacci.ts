
const fibonacci = (n: number) => {
    let f1 = 0
    let f2 = 1

    for (let i = 0; i < n; i++) {
        console.log(f1)
        let sum = f1 + f2
        f1 = f2
        f2 = sum
    }

}

fibonacci(10)
