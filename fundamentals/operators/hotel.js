/* 
Crea un programa en JS que calcule la factura total de una persona
en un hotelm donde cada habitacion tiene un precio de 100$ por noche
aprovechando una oferta promocional que incluye el 5%

el pograma debe solicitar al huesped el numero de noches que paso en el
hotel para calcular la factura final

si el usuario ingresa 5 noches, total = 475
*/

const prompt = require('prompt-sync')()

const nightPrice = 100
const currency = '$'
const promoDiscount = 0.05

let name = prompt('Cual es el nombre para la reserva: ')
let days = parseInt(prompt('Cuantos dias desea quedarse: ')) 

let subtotal = nightPrice * days
let discount = subtotal * promoDiscount
let total = subtotal - discount

console.log(`
    FACTURA: ${name}
    DIAS: ${days}
    SUBTOTAL: ${currency}${subtotal}
    DESCUENTO: ${currency}${discount}
    TOTAL: ${currency}${total}
    `)



