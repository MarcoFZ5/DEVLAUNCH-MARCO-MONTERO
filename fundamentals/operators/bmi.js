/* 
Escribe un programa en JS que calcule y muestre el indice de MASA CORPORAL (IMC) de un usuario
el programa debe solicitar nombre, altura en metrso y peso en kilogramos

despues de calcular el IMC, debe mostrarse un mensaje al usuario que incluya su nombre y el valor del IMC

FORMULA IMC 
imc = weight / height**2
*/

const prompt = require('prompt-sync')()

let userName = prompt('What is your name: ')
let userHeight = parseFloat(prompt('What is your height: '))
let userWeight = parseFloat(prompt('What is your weight: '))

let imcTotal = userWeight / userHeight**2

console.log(`
    NAME: ${userName}
    HEIGHT: ${userHeight}
    WEIGHT: ${userWeight}
    ----------------------
    BMI: ${imcTotal.toFixed(2)}
    `)

