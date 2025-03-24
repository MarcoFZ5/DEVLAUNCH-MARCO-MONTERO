import PromptSync = require("prompt-sync")

const prompt = PromptSync()

const min_number = 1
const max_number = 100

const guessNumber = () => {
    const randomNumber = Math.floor(Math.random() * max_number) + min_number
    while (true) {
        const userGuess = parseInt(prompt("Guess the number: "))
        const isValidNumber = (
            !isNaN(userGuess) &&
            userGuess > min_number &&
            userGuess < max_number
        )

        if (isValidNumber) {
            if (userGuess > randomNumber) {
                console.log("Too high")
            } else if (userGuess < randomNumber) {
                console.log("Too low")
            } else {
                console.log('HELL YEAH, YOU HIT IT')
                break
            }
        } else {
            console.log('INVALID CHARACTER')
        }

    }
}

guessNumber()