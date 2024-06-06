const fs = require('node:fs/promises')

const  { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile) // SOLO EN EL CASO DE UTILIZAR UNA VERSIÓN NODE ----- SIN PROMESAS ------

console.log('Leyendo el primer archivo')
console.log('------------------------------------11111111111')

readFilePromise('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('Texto con promesas: ', text)
    })

console.log('Haciendo cosas mientras lee el archivo 1 y 2')

console.log('------------------------------------222222222')

console.log('Leyendo el segundo archivo')

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('Segundo texto con promesas nativas:' , text)
    })
