const min_month = 1
const max_month = 12
const min_day = 1
const min_year = 1

const isValidDate = (day: number, month: number, year: number): boolean => {
    if (year < min_year || month < min_month || month > max_month || day < min_day) {
        return false
    }

    const daysInMonth: number = new Date(year, month, 0).getDate()

    return day <= daysInMonth
}

const sumDigits = (number: number): number => {
    let sum = 0

    const digits = number.toString()

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i])
    }
    return sum
}

const calculateTarotNumber = (day: number, month: number, year: number): number | null => {
    if (!isValidDate(day, month, year)) {
        console.log("fecha invalida")
        return null
    }
    let total: number = day + month + year

    while (total >= 10) {
        total = sumDigits(total)
    }

    return total
}

console.log(calculateTarotNumber(5, 8, 2005))
