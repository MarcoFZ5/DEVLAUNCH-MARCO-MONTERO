
const prompt = require('prompt-sync')()

let mariasFavoriteFood = prompt("What is Maria's Favorite Food: ")
let pepesFavoriteFood = prompt("What is Pepe's Favorite Food: ")
let malvernsFavoriteFood = prompt("What is Malvern's Favorite Food: ")

const isMariaAndPepeSameFavFood = mariasFavoriteFood == pepesFavoriteFood
const isMariaAndMalvernSameFavFood = mariasFavoriteFood == malvernsFavoriteFood

const fullMatch = isMariaAndPepeSameFavFood && isMariaAndMalvernSameFavFood
const someMatch = isMariaAndPepeSameFavFood || isMariaAndMalvernSameFavFood
const noMatch = !isMariaAndPepeSameFavFood && !isMariaAndMalvernSameFavFood

console.log(`
    Does Maria share the same favorite food as both Pepe and Malvern?: ${fullMatch}
    Does Maria match with either Pepe or Malverns?: ${someMatch}
    Does Maria preference is different from both Pepes and Malverns?: ${noMatch}
    `)
