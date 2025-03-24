
const game_attempts = 50
const min_face = 1
const max_face = 6

const rollDice = () => {
    return Math.floor(Math.random() * max_face) + min_face
}

const getProfit = (): number => {
    let profit = 0

    for (let i = 1; i <= game_attempts; i++) {
        const dice1 = rollDice()
        const dice2 = rollDice()
        const dice3 = rollDice()

        const totalDice = dice1 + dice2 + dice3

        profit += (totalDice >= 10) ? -10 : 15
    }
    return profit
}

console.log(getProfit())
console.log(getProfit())
console.log(getProfit())
console.log(getProfit())
console.log(getProfit())