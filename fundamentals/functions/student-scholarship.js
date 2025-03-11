
const prompt = require('prompt-sync')()

const reject_assistant_grade = 'C'
const amount_of_grades = 4
const min_grade = 8
const min_average_grade = 8.5
const fast_forward_grade = 9


function validateScholarship(grade1, grade2, grade3, grade4, assistantGrade) {
    if (assistantGrade == reject_assistant_grade) return false

    const average = (grade1 + grade2 + grade3 + grade4) / amount_of_grades
    console.log(average)

    if (grade1 < min_grade || grade2 < min_grade || grade3 < min_grade || grade4 < min_grade) {
        return false
    }

    if (average < min_average_grade) {
        return false
    } else {
        if (average < fast_forward_grade && !(assistantGrade === 'A' || assistantGrade === 'B'))
            return false
    }

    return true
}

function main() {
    const grade1 = parseFloat(prompt('Grade #1: '))
    const grade2 = parseFloat(prompt('Grade #2: '))
    const grade3 = parseFloat(prompt('Grade #3: '))
    const grade4 = parseFloat(prompt('Grade #4: '))
    const assistantGrade = prompt('Assistant Grade (A, B, C): ').toUpperCase()

    const isEligible = validateScholarship(grade1, grade2, grade3, grade4, assistantGrade)

    if (isEligible) {
        console.log('CONGRATS YOU ARE ELEGIBLE FOR SCHOLARSHIP')
    } else {
        console.log('SORRY, NOT IN')
    }
}

main()