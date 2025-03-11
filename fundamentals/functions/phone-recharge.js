
const prompt = require('prompt-sync')()

const min_year_duration = 1
const min_recharge_amount = 20
const max_recharge_amount = 80
const mega_recharge_duration = 3
const min_duplicate_amout = 38

function calculateRecharge(amount, duration) {
    let multiplier = 1
    if (duration < min_year_duration) return amount

    if (amount > min_recharge_amount) {
        if (duration >= mega_recharge_duration) {
            multiplier = 3
        } else if (amount >= min_duplicate_amout && amount <= max_recharge_amount) {
            multiplier = 2
        }
    }
    return amount * multiplier
}

function main() {
    const name = prompt('Name: ')
    const amount = parseInt(prompt('Monto: '))
    const duration = parseInt(prompt('Duracion: '))

    const recharge = calculateRecharge(amount, duration)
    const promo = recharge - amount

    console.log(`
        NAME: ${name}
        -------------
        RECHARGE: ${recharge}
        PROMO: ${promo}
        `)
}

main()