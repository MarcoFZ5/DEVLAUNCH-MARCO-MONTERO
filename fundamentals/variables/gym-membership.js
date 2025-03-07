/* 
El elite Fitness Center es un gimnasio boutique ubicado en Palo ALto, California
que ofrece membresias por $150 al mes.
Opera de 6 AM a 10 PM, emplea a 10 entrenadores certificados
y cuenta con comodidades como sauna, piscinia y clases grupales
*/


const gymName = 'Elite Fitness Center'
const gymType = 'Boutique'

const ubication = 'Palo Alto, California'

const membershipPrice = 150
const membershipCurrency = '$'
const membershipTime = 'per month'

const initialHour = 6
const finalHour = 10
const timeOperating = `${initialHour} AM to ${finalHour} PM`

const quantityEmployees = 10

const comoditys = ['sauna', 'piscina', 'clases grupales']

console.log(`
    Gym: ${gymName} Type: ${gymType}\n
    Location: ${ubication} Pricing: ${membershipPrice}
    ${membershipCurrency} ${membershipTime}\n
    Time: ${timeOperating} Trainers: ${quantityEmployees} Certified\n
    Comoditys: ${comoditys}
    `)

