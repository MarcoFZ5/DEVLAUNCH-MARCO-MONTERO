/*
Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes
en una escuela. Como parte de este desafio, primero configuras el entorno para recibir entradas
del usuario, permitiendo que ingresen tres notas.

Luego, procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presentas el resultado formateando con maximo dos decimales, para asegurar una lectura clara.

Si el usuario ingresa las calificaciones 80, 70 y 90, la salida sera 80
*/

const prompt = require('prompt-sync')()

let nota1 = parseFloat(prompt('Ingrese la primera nota: '))
let nota2 = parseFloat(prompt('Ingrese la segunda nota: '))
let nota3 = parseFloat(prompt('Ingrese la tercera nota: '))

let totalNotas = 3
let sumaTotalNotas = nota1 + nota2 + nota3

let promedioNotas = sumaTotalNotas / totalNotas

console.log(`
    PROMEDIO DE NOTAS
    NOTA 1: ${nota1} NOTA 2: ${nota2} NOTA 3: ${nota3}
    PROMEDIO: ${promedioNotas.toFixed(2)}
    `)
