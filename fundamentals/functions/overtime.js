const prompt = require('prompt-sync')()
const normalHours = 8
const extraHoursMultiplier = 1.5

const calculateSalary = (hourlyRate, startTime, endTime) => {
    const [startHour] = startTime.split(':')
    const [endHour] = endTime.split(':')

    const workedHours = endHour - startHour

    let salary = 0

    if (workedHours <= 8) {
        salary = hourlyRate * workedHours
    } else if (workedHours > 8) {
        salary = hourlyRate * normalHours
        const extraHours = workedHours - normalHours
        extraSalary = extraHours * (hourlyRate * extraHoursMultiplier)
        salary += extraSalary
    }

    return salary
}


const main = () => {
    const hourlyRate = parseFloat(prompt('HOURLY RATE: '))
    const startTime = prompt('START AT: ')
    const endTime = prompt('END TIME: ')

    const salary = calculateSalary(hourlyRate, startTime, endTime)
    console.log(`
        START TIME: ${startTime}
        END TIME: ${endTime}
        TOTAL DAY PAY: ${salary}
        `)
}

main()